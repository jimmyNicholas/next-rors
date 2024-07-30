export type Teachers = {
    teacherOne: string;
    teacherTwo: string;
}

export type CourseMetaData = {
    id: string;
    course: string;
    className: string;
    teachers: Teachers;
};

export type OverallGrades = {
    reading: string; //'A' | 'B' | 'C' | 'D' | 'E' | 'N/A';
    writing: string; //'A' | 'B' | 'C' | 'D' | 'E' | 'N/A';
    speaking: string; //'A' | 'B' | 'C' | 'D' | 'E' | 'N/A';
    listening: string; //'A' | 'B' | 'C' | 'D' | 'E' | 'N/A';
}

export type Student = {
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
}

export type Students = Student[];

export type Results = {
    id: string;
    studentId: string;
    grammar: string[] | number[];
    vocabulary: string[] | number[];
    listening: string[] | number[];
    reading: string[] | number[];
    writing: string[];
    speaking: string[];
    pronunciation: string[];
}

export type StudentResult = {
    student: Student;
    results: Results;
}

export type CourseResults = {
    courseMetaData: CourseMetaData;
    studentResults: StudentResult[];
};

export type StudentTabsText = {
    studentId: string;
    firstName: string;
}
