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
    grammar: (string | number)[];
    vocabulary: (string | number)[];
    listening: (string | number)[];
    reading: (string | number)[];
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

interface BaseResult {
    studentId: string;
    firstName: string;
}

interface GrammarVocabularyResult extends BaseResult  {
    partTwo: number;
    partThree: number;
    partFour: number;
    partFive: number;
    comments?: string;
    absent: boolean;
    na: boolean;
}

interface VocabularyResult extends BaseResult  {
    partTwo: number;
    partThree: number;
    comments?: string;
    absent: boolean;
    na: boolean;
}

interface ListeningResult extends BaseResult  {
    partOne: number;
    partTwo: number;
    partThree: number;
    partFour: number;
    comments?: string;
    absent: boolean;
    na: boolean;
}

interface ReadingResult extends BaseResult  {
    partOne: number;
    partTwo: number;
    partThree: number;
    partFour: number;
    comments?: string;
    absent: boolean;
    na: boolean;
}

interface writingSpeakingPronunciationResult extends BaseResult {
    writing?: string;
    speaking?: string;
    pronunciation?: string;
}

interface BaseResults<T> {
    week: number;
    results: T[];
}

interface TotalQuestionResults<T> extends BaseResults<T> {
    totalQuestions: number;
    id: string;
    date: string;
    skill: string;
}

interface GramVocabResults<T> extends BaseResults<T> {
    totalGrammarQuestions: number;
    totalVocabularyQuestions: number;
    id: string;
    date: string;
    skill: string;
}

export type GrammarVocabularyResults = GramVocabResults<GrammarVocabularyResult>;
export type ListeningResults = TotalQuestionResults<ListeningResult>;
export type ReadingResults = TotalQuestionResults<ReadingResult>;
export type WriteSpeakPronResults = BaseResults<writingSpeakingPronunciationResult>;

export type TestResults = {
    grammarVocabularyResults: GrammarVocabularyResults[];
    listeningResults: ListeningResults[];
    readingResults: ReadingResults[];
    writeSpeakPronResults: WriteSpeakPronResults[];
}
