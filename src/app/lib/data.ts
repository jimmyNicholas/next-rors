import { courseMetaData, students, courseResults } from "./placeholder-data";

export async function fetchCourseMetaData() {    
    return courseMetaData;
}

export async function fetchStudents() {
    return students;
}

export async function fetchCourseResults() {
    return courseResults;
}