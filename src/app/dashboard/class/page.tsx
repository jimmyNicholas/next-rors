'use client';

import { useState, useEffect } from "react";

import { inter } from '@/app/ui/fonts';
import { fetchCourseResults } from "@/app/lib/data";
import { CourseMetaData, StudentResults } from '@/app/lib/definitions';

import ClassMetaData from '@/app/ui/class/classMetaData';
import StudentsTable from '@/app/ui/class/studentTable';
import AddStudent from "@/app/ui/class/addStudent";


export default function Page() {
    const [courseMetaData, setCourseMetaData] = useState<CourseMetaData | undefined>(undefined);
    const [studentResults, setStudentResults] = useState<StudentResults[] | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const courseResults = await fetchCourseResults('Foundation 1');
                if (courseResults) {
                    const { courseMetaData, studentResults} = courseResults;
                    setCourseMetaData(courseMetaData);
                    setStudentResults(studentResults);
                }
            } catch (error) {
                console.error('Course Meta Data Fetch Error', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [loading]);

    if (loading) return <p>Loading...</p>;

    const refreshData = () => {
        setLoading(prev => !prev);
    };

    return (
        <main>
            <h1 className={`${inter.className} mb-4 text-xl md:text-2x1`}>
                Class
            </h1>
            <div className='flex flex-row gap-2 justify-center'>
                {!loading && courseMetaData ? (
                    <ClassMetaData courseMetaData={courseMetaData}/>
                ) : null}
            </div>
            <div>
                {!loading && studentResults ? (
                    <StudentsTable 
                        studentResults={studentResults}
                        refreshData={refreshData}
                    />
                ) : null}
            </div>
            <div className="grid grid-flow-col p-4">
                {!loading && courseMetaData ? (
                    <AddStudent 
                        courseMetaDataId={courseMetaData.id}
                        refreshData={refreshData}
                    />
                ) : null}
            </div>
        </main>
    )
}