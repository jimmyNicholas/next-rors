export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
  };

export type Teachers = {
    teacherOne: string;
    teacherTwo: string;
}

export type CourseMetaData = {
    id: number;
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

export type StudentTabsText = {
    studentId: string;
    firstName: string;
}

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