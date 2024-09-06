import { CourseMetaData, StudentResults } from "./definitions";
import { formatDate } from "../ui/utility/date";

export function convertCourseMetaData(row:any): CourseMetaData {
    return {
        course: row.course,
        className: row.class_name,
        id: parseInt(row.id),
        teachers: {
            teacherOne: row.teacher_one,
            teacherTwo: row.teacher_two,
        }
    }
};

export function convertStudentResults(row:any): StudentResults {
    
    return {
        id: row.id,
        studentId: row.student_id,
        startDate: row.start_date === null ? '' : formatDate(row.start_date),
        endDate: row.end_date === null ? '' : formatDate(row.end_date),
        firstName: row.first_name,
        lastName: row.last_name,
        nickname: row.nickname === null ? '' : row.nickname,
        participation: row.participation,
        leavers: row.leavers,
        teacherComments: row.teacher_comments,
        overallGrades: {
            reading: row.overall_reading,
            writing: row.overall_writing,
            listening: row.overall_listening,
            speaking: row.overall_speaking,
        },
        grammar: row.grammar === null ? [] : row.grammar,
        vocabulary: row.vocabulary === null ? [] : row.vocabulary,
        listening: row.listening === null ? [] : row.listening,
        reading: row.reading === null ? [] : row.reading,
        writing: row.writing === null ? [] : row.writing,
        speaking: row.speaking === null ? [] : row.speaking,
        pronunciation: row.pronunciation === null ? [] : row.pronunciation,
    }
};
