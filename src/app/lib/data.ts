import { courseMetaData, students, courseResults, results } from "./placeholder-data";

export async function fetchCourseMetaData() {    
    return courseMetaData;
}

export async function fetchStudents() {
    return students;
}

export async function fetchCourseResults() {
    return courseResults;
}

export async function fetchResults() {
    return results;
}