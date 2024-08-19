import { students } from "./placeholder-data";
import { CourseMetaData, StudentResults } from "./definitions";
import { convertCourseMetaData, convertStudentResults } from "./caseConversion";


export async function fetchCourseMetaData(className: string): Promise<CourseMetaData | undefined>  {
    const queryParams = `className=${encodeURIComponent(className)}`;

    try {
        const response = await fetch(`/api/course-meta-data/get?${queryParams}`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to get course meta data');
        }
   
        const responseData = await response.json();
        const courseMetaData  = responseData.result.rows[0];
        return convertCourseMetaData(courseMetaData);

    } catch (error) {
        console.error(error, 'Failed to get course meta data');
        return undefined;
    } 
}

export async function fetchStudents() {
    return students;
}

export async function fetchResults(courseMetaDataId: number): Promise<StudentResults[] | undefined> {
    const queryParams = `courseMetaDataId=${encodeURIComponent(courseMetaDataId)}`;
    
    try {
        const response = await fetch(`/api/student/get?${queryParams}`, {
            method: 'GET',
        });      

        if (!response.ok) {
            throw new Error('Failed to get results data');
        }
   
        const responseData = await response.json();
    
        const studentResults = await responseData.result.rows;

        return studentResults.map((student: any) => {
            return convertStudentResults(student);
        })


    } catch (error) {
        console.error(error, 'Failed to get results data');
        return undefined;
    } 
}

export async function fetchCourseResults(className: string) {

    try {
        const courseMetaData: CourseMetaData | undefined = await fetchCourseMetaData(className);
        if (!courseMetaData) {
            throw new Error('Failed to get course meta data');
        }
        console.log(courseMetaData);
        
        const course_meta_data_id = courseMetaData.id;
        
        const studentResults: StudentResults[] | undefined = await fetchResults(course_meta_data_id);
        if (!studentResults) {
            throw new Error('Failed to get results data');
        }
        
        const courseResults = {courseMetaData, studentResults};
        return courseResults;

    } catch (error) {
        console.error(error, 'Failed to get course results');
    }
}

