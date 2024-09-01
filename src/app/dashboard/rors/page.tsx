'use client';

import { fetchCourseResults } from "@/app/lib/data";
import { CourseMetaData, StudentResults } from "@/app/lib/definitions"

import StudentTabsWrapper from "@/app/ui/rors/studentTabs";
import RecordOfResults from "@/app/ui/rors/recordOfResult";
import { useState, useEffect } from "react";

export default function Page () {
    const [courseMetaData, setCourseMetaData] = useState<CourseMetaData | undefined>(undefined);
    const [studentResults, setStudentResults] = useState<StudentResults[] | undefined>([]);
    const [activeIndex, setActiveIndex] = useState(0);
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
                console.error('Student Fetch Error', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;

    const studentTabsText = studentResults?.map((studentResult)=> {
        return {
            studentId: studentResult.studentId,
            firstName: studentResult.firstName,
        }
    });    
    /*
    function onUpdateStudent(updatedStudent: StudentResults) {
        const updatedStudents = studentResults?.map(
            student => {
                if (student.id === updatedStudent.id) {
                    return updatedStudent;
                } else {
                    return student;
                }
            }
        )
        setStudentResults(updatedStudents);
    };
    */
    return (
        <div className="grid justify-items-center">
            <div className="max-w-5xl">
                <p className="text-xs">Rors Page</p>
                <StudentTabsWrapper 
                    activeIndex={activeIndex} 
                    setActiveIndex={setActiveIndex}
                    studentTabsText={studentTabsText ?? []}
                />
                {!loading && (courseMetaData && studentResults) ? (
                    <RecordOfResults
                        courseMetaData={courseMetaData} 
                        studentResult={studentResults[activeIndex]}
                    />
                ) : null}
            </div>
        </div>
    )
}