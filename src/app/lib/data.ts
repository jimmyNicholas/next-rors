import { students, courseResults, results } from "./placeholder-data";
import { courseMetaData, studentResults } from "./placeholder-data_v2";

export async function fetchCourseMetaData() {    
    return courseMetaData;
}

export async function fetchStudents() {
    return students;
}

export async function fetchCourseResults() {
    return {courseMetaData, studentResults};
}

export async function fetchResults() {
    return studentResults;
}