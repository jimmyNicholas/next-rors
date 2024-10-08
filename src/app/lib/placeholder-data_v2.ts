
const courseMetaData = {
    id: 1,
    course: 'Extreme English',
    className: 'Foundation 1',
    teachers: {
        teacherOne: 'Jimmy',
        teacherTwo: 'Ra',
    }
};

const studentResults = [
    {
        id: '0',
        studentId: '22884',
        firstName: 'Itsami', 
        lastName: 'Mario', 
        nickname: '', 
        startDate: '05/08/24',
        endDate: '11/10/24', 
        participation: 'S', 
        leavers: 'N/A', 
        teacherComments: '',
        overallGrades: {
            reading: 'C',
            writing: 'C',
            speaking: 'D',
            listening: 'E',
        },
        grammar: ['56', '81', '25'],
        vocabulary: ['63', '81', '88'],
        listening: ['15', 'NA', '25'],
        reading: ['NA', '50', 'NA'],
        writing: ['C', 'C', 'B'],
        speaking: ['D', 'C', 'C'],
        pronunciation: ['B', 'C', 'B'],
    },
    {
        id: '1',
        studentId: '25151', 
        firstName: 'Yoyo', 
        lastName: 'Mountain', 
        nickname: 'Bounce', 
        startDate: '05/08/24',
        endDate: '11/10/24', 
        participation: 'S', 
        leavers: 'N/A', 
        teacherComments: '',
        overallGrades: {
            reading: 'A',
            writing: 'C',
            speaking: 'C',
            listening: 'C'
        },
        grammar: ['Abs', '81', '94'],
        vocabulary: ['Abs', '94', '94'],
        listening: ['54', 'NA', '33'],
        reading: ['NA', '80', 'NA'],
        writing: ['C', 'B', 'C'],
        speaking: ['C', 'B', 'B'],
        pronunciation: ['B', 'B', 'B'],  
    },
    {
        id: '2',
        studentId: '25884', 
        firstName: 'Train', 
        lastName: 'Martin Martini', 
        nickname: 'Jewel', 
        startDate: '05/08/24',
        endDate: '11/10/24', 
        participation: 'S', 
        leavers: 'N/A', 
        teacherComments: '',
        overallGrades: {
            reading: 'C',
            writing: 'C',
            speaking: 'C',
            listening: 'E'
        },
        grammar: ['56', '56', '69'],
        vocabulary: ['63', '69', '94'],
        listening: ['31', 'NA', '17'],
        reading: ['NA', '50', 'NA'],
        writing: ['C', 'B', 'C'],
        speaking: ['C', 'C', 'B'],
        pronunciation: ['D', 'D', 'D'],
    },
    // {
    //     id: '3',
    //     studentId: '26263', 
    //     firstName: 'Ember Rain', 
    //     lastName: 'Pacho Excuse', 
    //     nickname: 'Rain', 
    //     startDate: '05/08/24',
    //     endDate: '11/10/24', 
    //     participation: 'S', 
    //     leavers: 'N/A', 
    //     teacherComments: '',
    //     overallGrades: {
    //         reading: 'C',
    //         writing: 'C',
    //         speaking: 'C',
    //         listening: 'E'
    //     },
    //     grammar: ['56', '56', '69'],
    //     vocabulary: ['63', '69', '94'],
    //     listening: ['31', 'NA', '17'],
    //     reading: ['NA', '50', 'NA'],
    //     writing: ['C', 'B', 'C'],
    //     speaking: ['C', 'C', 'B'],
    //     pronunciation: ['D', 'D', 'D'],
    // },
    // {
    //     id: '4',
    //     studentId: '22884',
    //     firstName: 'Itsami', 
    //     lastName: 'Mario', 
    //     nickname: '', 
    //     startDate: '05/08/24',
    //     endDate: '11/10/24', 
    //     participation: 'S', 
    //     leavers: 'N/A', 
    //     teacherComments: '',
    //     overallGrades: {
    //         reading: 'C',
    //         writing: 'C',
    //         speaking: 'D',
    //         listening: 'E',
    //     },
    //     grammar: ['56', '81', '25'],
    //     vocabulary: ['63', '81', '88'],
    //     listening: ['15', 'NA', '25'],
    //     reading: ['NA', '50', 'NA'],
    //     writing: ['C', 'C', 'B'],
    //     speaking: ['D', 'C', 'C'],
    //     pronunciation: ['B', 'C', 'B'],
    // },
    // {
    //     id: '5',
    //     studentId: '25151', 
    //     firstName: 'Yoyo', 
    //     lastName: 'Mountain', 
    //     nickname: 'Bounce', 
    //     startDate: '05/08/24',
    //     endDate: '11/10/24', 
    //     participation: 'S', 
    //     leavers: 'N/A', 
    //     teacherComments: '',
    //     overallGrades: {
    //         reading: 'A',
    //         writing: 'C',
    //         speaking: 'C',
    //         listening: 'C'
    //     },
    //     grammar: ['Abs', '81', '94'],
    //     vocabulary: ['Abs', '94', '94'],
    //     listening: ['54', 'NA', '33'],
    //     reading: ['NA', '80', 'NA'],
    //     writing: ['C', 'B', 'C'],
    //     speaking: ['C', 'B', 'B'],
    //     pronunciation: ['B', 'B', 'B'],  
    // },
    // {
    //     id: '6',
    //     studentId: '25884', 
    //     firstName: 'Train', 
    //     lastName: 'Martin Martini', 
    //     nickname: 'Jewel', 
    //     startDate: '05/08/24',
    //     endDate: '11/10/24', 
    //     participation: 'S', 
    //     leavers: 'N/A', 
    //     teacherComments: '',
    //     overallGrades: {
    //         reading: 'C',
    //         writing: 'C',
    //         speaking: 'C',
    //         listening: 'E'
    //     },
    //     grammar: ['56', '56', '69'],
    //     vocabulary: ['63', '69', '94'],
    //     listening: ['31', 'NA', '17'],
    //     reading: ['NA', '50', 'NA'],
    //     writing: ['C', 'B', 'C'],
    //     speaking: ['C', 'C', 'B'],
    //     pronunciation: ['D', 'D', 'D'],
    // },
    // {
    //     id: '7',
    //     studentId: '25884', 
    //     firstName: 'Train', 
    //     lastName: 'Martin Martini', 
    //     nickname: 'Jewel', 
    //     startDate: '05/08/24',
    //     endDate: '11/10/24', 
    //     participation: 'S', 
    //     leavers: 'N/A', 
    //     teacherComments: '',
    //     overallGrades: {
    //         reading: 'C',
    //         writing: 'C',
    //         speaking: 'C',
    //         listening: 'E'
    //     },
    //     grammar: ['56', '56', '69'],
    //     vocabulary: ['63', '69', '94'],
    //     listening: ['31', 'NA', '17'],
    //     reading: ['NA', '50', 'NA'],
    //     writing: ['C', 'B', 'C'],
    //     speaking: ['C', 'C', 'B'],
    //     pronunciation: ['D', 'D', 'D'],
    // },
    // {
    //     id: '8',
    //     studentId: '22884',
    //     firstName: 'Itsami', 
    //     lastName: 'Mario', 
    //     nickname: '', 
    //     startDate: '05/08/24',
    //     endDate: '11/10/24', 
    //     participation: 'S', 
    //     leavers: 'N/A', 
    //     teacherComments: '',
    //     overallGrades: {
    //         reading: 'C',
    //         writing: 'C',
    //         speaking: 'D',
    //         listening: 'E',
    //     },
    //     grammar: ['56', '81', '25'],
    //     vocabulary: ['63', '81', '88'],
    //     listening: ['15', 'NA', '25'],
    //     reading: ['NA', '50', 'NA'],
    //     writing: ['C', 'C', 'B'],
    //     speaking: ['D', 'C', 'C'],
    //     pronunciation: ['B', 'C', 'B'],
    // },
    // {
    //     id: '9',
    //     studentId: '25151', 
    //     firstName: 'Yoyo', 
    //     lastName: 'Mountain', 
    //     nickname: 'Bounce', 
    //     startDate: '05/08/24',
    //     endDate: '11/10/24', 
    //     participation: 'S', 
    //     leavers: 'N/A', 
    //     teacherComments: '',
    //     overallGrades: {
    //         reading: 'A',
    //         writing: 'C',
    //         speaking: 'C',
    //         listening: 'C'
    //     },
    //     grammar: ['Abs', '81', '94'],
    //     vocabulary: ['Abs', '94', '94'],
    //     listening: ['54', 'NA', '33'],
    //     reading: ['NA', '80', 'NA'],
    //     writing: ['C', 'B', 'C'],
    //     speaking: ['C', 'B', 'B'],
    //     pronunciation: ['B', 'B', 'B'],  
    // },
    // {
    //     id: '10',
    //     studentId: '25884', 
    //     firstName: 'Train', 
    //     lastName: 'Martin Martini', 
    //     nickname: 'Jewel', 
    //     startDate: '05/08/24',
    //     endDate: '11/10/24', 
    //     participation: 'S', 
    //     leavers: 'N/A', 
    //     teacherComments: '',
    //     overallGrades: {
    //         reading: 'C',
    //         writing: 'C',
    //         speaking: 'C',
    //         listening: 'E'
    //     },
    //     grammar: ['56', '56', '69'],
    //     vocabulary: ['63', '69', '94'],
    //     listening: ['31', 'NA', '17'],
    //     reading: ['NA', '50', 'NA'],
    //     writing: ['C', 'B', 'C'],
    //     speaking: ['C', 'C', 'B'],
    //     pronunciation: ['D', 'D', 'D'],
    // },
    // {
    //     id: '11',
    //     studentId: '25884', 
    //     firstName: 'Train', 
    //     lastName: 'Martin Martini', 
    //     nickname: 'Jewel', 
    //     startDate: '05/08/24',
    //     endDate: '11/10/24', 
    //     participation: 'S', 
    //     leavers: 'N/A', 
    //     teacherComments: '',
    //     overallGrades: {
    //         reading: 'C',
    //         writing: 'C',
    //         speaking: 'C',
    //         listening: 'E'
    //     },
    //     grammar: ['56', '56', '69'],
    //     vocabulary: ['63', '69', '94'],
    //     listening: ['31', 'NA', '17'],
    //     reading: ['NA', '50', 'NA'],
    //     writing: ['C', 'B', 'C'],
    //     speaking: ['C', 'C', 'B'],
    //     pronunciation: ['D', 'D', 'D'],
    // },
    // {
    //     id: '12',
    //     studentId: '22884',
    //     firstName: 'Itsami', 
    //     lastName: 'Mario', 
    //     nickname: '', 
    //     startDate: '05/08/24',
    //     endDate: '11/10/24', 
    //     participation: 'S', 
    //     leavers: 'N/A', 
    //     teacherComments: '',
    //     overallGrades: {
    //         reading: 'C',
    //         writing: 'C',
    //         speaking: 'D',
    //         listening: 'E',
    //     },
    //     grammar: ['56', '81', '25'],
    //     vocabulary: ['63', '81', '88'],
    //     listening: ['15', 'NA', '25'],
    //     reading: ['NA', '50', 'NA'],
    //     writing: ['C', 'C', 'B'],
    //     speaking: ['D', 'C', 'C'],
    //     pronunciation: ['B', 'C', 'B'],
    // },
    // {
    //     id: '13',
    //     studentId: '25151', 
    //     firstName: 'Yoyo', 
    //     lastName: 'Mountain', 
    //     nickname: 'Bounce', 
    //     startDate: '05/08/24',
    //     endDate: '11/10/24', 
    //     participation: 'S', 
    //     leavers: 'N/A', 
    //     teacherComments: '',
    //     overallGrades: {
    //         reading: 'A',
    //         writing: 'C',
    //         speaking: 'C',
    //         listening: 'C'
    //     },
    //     grammar: ['Abs', '81', '94'],
    //     vocabulary: ['Abs', '94', '94'],
    //     listening: ['54', 'NA', '33'],
    //     reading: ['NA', '80', 'NA'],
    //     writing: ['C', 'B', 'C'],
    //     speaking: ['C', 'B', 'B'],
    //     pronunciation: ['B', 'B', 'B'],  
    // },
    // {
    //     id: '14',
    //     studentId: '25884', 
    //     firstName: 'Train', 
    //     lastName: 'Martin Martini', 
    //     nickname: 'Jewel', 
    //     startDate: '05/08/24',
    //     endDate: '11/10/24', 
    //     participation: 'S', 
    //     leavers: 'N/A', 
    //     teacherComments: '',
    //     overallGrades: {
    //         reading: 'C',
    //         writing: 'C',
    //         speaking: 'C',
    //         listening: 'E'
    //     },
    //     grammar: ['56', '56', '69'],
    //     vocabulary: ['63', '69', '94'],
    //     listening: ['31', 'NA', '17'],
    //     reading: ['NA', '50', 'NA'],
    //     writing: ['C', 'B', 'C'],
    //     speaking: ['C', 'C', 'B'],
    //     pronunciation: ['D', 'D', 'D'],
    // },
    // {
    //     id: '15',
    //     studentId: '25884', 
    //     firstName: 'Train', 
    //     lastName: 'Martin Martini', 
    //     nickname: 'Jewel', 
    //     startDate: '05/08/24',
    //     endDate: '11/10/24', 
    //     participation: 'S', 
    //     leavers: 'N/A', 
    //     teacherComments: '',
    //     overallGrades: {
    //         reading: 'C',
    //         writing: 'C',
    //         speaking: 'C',
    //         listening: 'E'
    //     },
    //     grammar: ['56', '56', '69'],
    //     vocabulary: ['63', '69', '94'],
    //     listening: ['31', 'NA', '17'],
    //     reading: ['NA', '50', 'NA'],
    //     writing: ['C', 'B', 'C'],
    //     speaking: ['C', 'C', 'B'],
    //     pronunciation: ['D', 'D', 'D'],
    // },
];

export {courseMetaData, studentResults};