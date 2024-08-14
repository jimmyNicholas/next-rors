'use client';

import { useState, useEffect } from "react";

import { inter } from '@/app/ui/fonts';
import { fetchCourseResults } from "@/app/lib/data";
import { CourseResults } from '@/app/lib/definitions';

import ClassMetaData from '@/app/ui/class/classMetaData';
import StudentsTable from '@/app/ui/dashboard/studentTable';
import AddStudent from "@/app/ui/class/addStudent";


export default function Page() {
    const [courseResults, setCourseResults] = useState<CourseResults | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const courseResults = await fetchCourseResults();
                console.log(courseResults.studentResults);
                
                setCourseResults(courseResults);
            } catch (error) {
                console.error('Course Meta Data Fetch Error', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    if (loading) return <p>Loading...</p>;

    return (
        <main>
            <h1 className={`${inter.className} mb-4 text-xl md:text-2x1`}>
                Class
            </h1>
            <div className='flex flex-row gap-2 justify-center'>
                {!loading && courseResults ? (
                    <ClassMetaData courseMetaData={courseResults.courseMetaData}/>
                ) : null}
            </div>
            <div>
                {!loading && courseResults ? (
                    <StudentsTable studentResults={courseResults.studentResults}/>
                ) : null}
            </div>
            <div className="grid grid-flow-col p-4">
                <AddStudent />
            </div>
        </main>
    )
}