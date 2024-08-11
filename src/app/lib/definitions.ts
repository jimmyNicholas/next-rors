export type Teachers = {
    teacherOne: string;
    teacherTwo: string;
}

export type CourseMetaData = {
    id?: string;
    course: string;
    className: string;
    teachers: Teachers;
};

export type OverallGrades = {
    reading: string; 
    writing: string; 
    speaking: string; 
    listening: string; 
}

// export type Student = {
//     id: string;
//     studentId: string;
//     startDate: string;
//     endDate: string; 
//     firstName: string;
//     lastName: string;
//     nickname?: string; 
//     participation?: string;
//     leavers?: string;
//     teacherComments?: string;
//     overallGrades: OverallGrades;
// }

// export type Students = Student[];

// export type Results = {
//     id: string;
//     studentId: string;
//     grammar: (string | number)[];
//     vocabulary: (string | number)[];
//     listening: (string | number)[];
//     reading: (string | number)[];
//     writing: string[];
//     speaking: string[];
//     pronunciation: string[];
// }

// export type StudentResult = {
//     student: Student;
//     results: Results;
// }

export type StudentTabsText = {
    studentId: string;
    firstName: string;
}


/* ======results structuring====== */
// type StudentTestResult = {
//     studentId: string;
//     firstName: string;
// } & (
//     | {
//         partOne?: number;
//         partTwo?: number;
//         partThree?: number;
//         partFour?: number;
//         partFive?: number;
//         comments?: string;
//         absent: boolean;
//         na: boolean;
//         grade?: never;
//     }
//     | {
//         partOne?: never;
//         partTwo?: never;
//         partThree?: never;
//         partFour?: never;
//         partFive?: never;
//         comments?: never;
//         absent?: never;
//         na?: never;
//         grade: string;
//     }
// )

// export type TestResult = {
//     id: string;
//     date?: string;
//     skill: string;
//     week: number;
//     totalQuestions?: number;
//     results: StudentTestResult[];
// }

// export type TestResults = {
//     [key: string]: TestResult;
// }
/* ============ */


export type StudentResults = {
    id: string;
    studentId: string;
    startDate: string;
    endDate: string; 
    firstName: string;
    lastName: string;
    nickname?: string;
    participation?: string;
    leavers?: string;
    teacherComments?: string;
    overallGrades: OverallGrades;
    grammar: (string | number)[];
    vocabulary: (string | number)[];
    listening: (string | number)[];
    reading: (string | number)[];
    writing: string[];
    speaking: string[];
    pronunciation: string[];
};

export type CourseResults = {
    courseMetaData: CourseMetaData;
    studentResults: StudentResults[];
}