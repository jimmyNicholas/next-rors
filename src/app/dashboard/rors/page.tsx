'use client';

import { fetchCourseResults } from "@/app/lib/data";
import { CourseResults } from "@/app/lib/definitions"

import StudentTabsWrapper from "@/app/ui/rors/studentTabs";
import RecordOfResults from "@/app/ui/rors/recordOfResult";
import { useState, useEffect } from "react";

export default function Page () {
    const [courseResults, setCourseResults] = useState<CourseResults | undefined>(undefined);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const courseResults = await fetchCourseResults('Foundation 1');
                console.log(courseResults);
                
                setCourseResults(courseResults);
            } catch (error) {
                console.error('Student Fetch Error', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;

    const studentTabsText = courseResults?.studentResults?.map((studentResult)=> {
        return {
            studentId: studentResult.studentId,
            firstName: studentResult.firstName,
        }
    });    

    return (
        <div className="grid justify-items-center">
            <div className="max-w-5xl">
                <p className="text-xs">Rors Page</p>
                <StudentTabsWrapper 
                    activeIndex={activeIndex} 
                    setActiveIndex={setActiveIndex}
                    studentTabsText={studentTabsText ?? []}
                />
                {!loading && courseResults ? (
                    <RecordOfResults
                        courseMetaData={courseResults.courseMetaData} 
                        studentResult={courseResults.studentResults[activeIndex]}
                    />
                ) : null}
            </div>
        </div>
    )
}