'use client';

import { useState, useEffect } from "react";

import { fetchResults } from "@/app/lib/data";
import { StudentResults } from "@/app/lib/definitions";
import { WeekTabs } from "@/app/ui/tests/weekTabs";

import { Table } from "@/app/ui/tests/table";

export default function Page () {
    const [studentResults, setStudentResults] = useState<StudentResults[] | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [activeWeek, setActiveWeek] = useState(1);

    useEffect(() => {
        async function fetchTestResults() {
            try {
                const studentResults = await fetchResults(1);
                setStudentResults(studentResults)
            } catch (error) {
                console.error('Results Fetch Error', error);
            } finally {
                setLoading(false);
            }
        }
        fetchTestResults();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="grid gap-5">
            <p>Tests Page</p>
            <WeekTabs activeWeek={activeWeek} setActiveWeek={setActiveWeek}/>
            {!loading && studentResults ? (
                <Table activeWeek={activeWeek} studentResults={studentResults}/>
            ): null}
        </div>
    )
}