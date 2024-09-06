import React from "react";
import { useState } from "react";
import { CourseMetaData, StudentResults } from "@/app/lib/definitions";
import Row from "../utility/Row";
import { convertStudentResults } from "@/app/lib/caseConversion";
import { formatDate, formatDateForInput } from "../utility/date";

export default function RecordOfResults({
    courseMetaData,
    studentResult,
    onUpdateStudent,
}: {
    courseMetaData: CourseMetaData;
    studentResult: StudentResults;
    onUpdateStudent: (updatedStudent: StudentResults) => void;
}) {
    const {
        course, 
        className,
        teachers,
    } = courseMetaData;

    const {
        id, 
        studentId,
        startDate,
        endDate,
        firstName,
        lastName,
        nickname,
        participation,
        leavers,
        teacherComments,
        overallGrades,
        grammar,
        vocabulary,
        listening,
        reading,
        writing,
        speaking,
        pronunciation,
    } = studentResult;
    
    const fullName = nickname ? `${firstName} ${lastName} (${nickname})`: `${firstName} ${lastName}`;

    const [isEditingStudent, setIsEditingStudent] = useState(false);
    const [editStudentForm, setEditStudentForm] = useState<StudentResults>(studentResult);
    const metaDataInfo = [
        {
            title: 'Student', 
            value: fullName, 
            type: 'text', 
            editable: false
        },
        {
            title: 'Student ID', 
            value: studentId, 
            type: 'text', 
            editable: false
        },
        {
            title: 'Course', 
            value: course, 
            type: 'text', 
            editable: false
        },
        {
            title: 'Class', 
            value: className, 
            type: 'text', 
            editable: false
        },
        {
            title: 'Start Date', 
            name: "startDate", 
            value: isEditingStudent
                ? editStudentForm.startDate
                    ? formatDateForInput(editStudentForm.startDate) 
                    : ''
                : startDate
                || '', 
            type: 'date', 
            editable: true
        },
        {
            title: 'Finish Date',
            name: "endDate", 
            value: isEditingStudent
                ? editStudentForm.endDate
                    ? formatDateForInput(editStudentForm.endDate) 
                    : ''
                : endDate || '', 
            type: 'date', 
            editable: true
        },
    ]; 

    function handleStudentUpdate(updatedStudent: StudentResults) {
        setIsEditingStudent(false);
        onUpdateStudent(updatedStudent);
    };
    
    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        const {name, value} = e.currentTarget;
        
        setEditStudentForm({
            ...editStudentForm,
            [name]: value
        }); 
        setIsEditingStudent(true);       
    };

    function handleOnClick(e: React.MouseEvent<HTMLInputElement>) {
        const {name, value} = e.currentTarget;
        if (value === studentResult[name as keyof StudentResults]) {
            setEditStudentForm({
                ...editStudentForm,
                [name]: value
            }); 
        }
        setIsEditingStudent(true);
    }

    async function handleEditStudentForm(e: any) {
        e.preventDefault();
        const {
            id, 
            startDate,
            endDate,
            grammar,
            vocabulary,
        } = editStudentForm;

        if (JSON.stringify(editStudentForm) === JSON.stringify(studentResult)) {
            setIsEditingStudent(false);
            return;
        }
  
        try {
            await fetch(
                `/api/student/rorUpdate?id=${id}&startDate=${startDate}&endDate=${endDate}`)
                .then(res => res.json())
                .then(res => {
                    console.log('Student updated successfully!');
                    const updatedStudent = convertStudentResults(res.student.rows[0]);
                    handleStudentUpdate(updatedStudent);
                })
        } catch (error) {
            console.error(error, 'Failed to update student.');
        } finally {
            setIsEditingStudent(false);
        }
    };
    

    return(  
        <div className="bg-white my-3 text-black p-2 min-w-full rounded-lg">    
            <h1 className="font-bold text-2xl text-center py-1">Record Of Results</h1>

            <div className="grid grid-cols-10 grid-flow-row mb-3 border border-black text-sm">
                {metaDataInfo.map((data, index) => (
                    <React.Fragment key={index}>
                        <h3 className="border border-b-black border-r-black bg-neutral-300 font-bold col-span-2 p-1">{data.title}</h3>
                        {
                        (isEditingStudent && data.editable) ? (
                            <input 
                                className="border border-b-black bg-white col-span-3 p-1"
                                type={data.type}
                                name={data.name}
                                value={data.value}
                                onClick={handleOnClick}
                                onChange={handleChange}
                                onBlur={handleEditStudentForm}
                            />
                        ): (
                            <h3 
                                className="border border-b-black bg-white col-span-3 p-1"
                                onClick={handleOnClick}
                            >{data.value}</h3> 
                        )}
                    </React.Fragment>
                ))}
                <h3 className="border border-r-black bg-neutral-300 font-bold col-span-2 p-1">Teachers</h3>
                <h3 className="bg-white col-span-8 p-1">{teachers.teacherOne} and {teachers.teacherTwo}</h3>
            </div>

            <div>
                <h4 className="font-bold text-sm text-center"> 
                    Write test results in percentage values 
                </h4>
                <h4 className="text-sm italic text-center"> 
                    NA = Test not given, Hols = Holidays, Abs = Absent, DNS = Did not Submit
                </h4>
            </div>

            <div className="grid grid-cols-12 grid-flow-row mb-3 border border-black">
                <Row title='Start Week' style={'text-center'}/>
                <Row title='Week' array={[...Array(10)].map((x, i) => i + 1)} style={'font-bold bg-neutral-300 text-center'}/>
                <Row title='Grammar' array={grammar} style={'px-1'}/>
                <Row title='Vocabulary' array={vocabulary} style={'px-1'}/>
                <Row title='Listening' array={listening} style={'px-1'}/>
                <Row title='Reading' array={reading} style={'px-1'}/>
            </div>

            <div className="text-sm text-center">
                <h4 className="font-bold"> 
                    Select grades (A, B, C, etc) as per conversion table below
                </h4>
                <h4 className="italic"> 
                    NA = Test not given, Hols = Holidays, Abs = Absent, DNS = Did not Submit
                </h4>
            </div>
            <div className="grid grid-cols-12 grid-flow-row border border-black mb-4">
                <Row title='Week' array={[...Array(10)].map((x, i) => i + 1)} style={'font-bold bg-neutral-300 text-center'}/>
                <Row title='Writing' array={writing} style={'px-1'}/>
                <Row title='Speaking' array={speaking} style={'px-1'}/>
                <Row title='Pronunciation' array={pronunciation} style={'px-1'}/>
            </div>

            <div className="grid grid-cols-7 grid-flow-row text-sm mb-3">
                <div className="col-start-3 col-span-3 grid grid-cols-4 grid-flow-row border border-black">
                    <h4 className="col-span-4 font-bold p-0.5 bg-neutral-300 text-center">Overall</h4>
                    <h4 className="col-span-1 font-bold p-0.5 bg-neutral-300 text-center">Reading</h4>
                    <h4 className="col-span-1 font-bold p-0.5 bg-neutral-300 text-center">Writing</h4>
                    <h4 className="col-span-1 font-bold p-0.5 bg-neutral-300 text-center">Speaking</h4>
                    <h4 className="col-span-1 font-bold p-0.5 bg-neutral-300 text-center">Listening</h4>
                    <h4 className="col-span-1 p-2 text-center">{overallGrades.reading}</h4>
                    <h4 className="col-span-1 p-2 text-center">{overallGrades.writing}</h4>
                    <h4 className="col-span-1 p-2 text-center">{overallGrades.speaking}</h4>
                    <h4 className="col-span-1 p-2 text-center">{overallGrades.listening}</h4>
                </div>
            </div>

            <div>
                <div className="flex justify-center gap-20 text-sm">
                    <div className="flex gap-2">
                        <h4 className="font-bold">Participation: </h4>
                        <p className="text-neutral-500">{participation}</p>
                    </div>
                    <div className="flex gap-2">
                        <h4 className="font-bold">Leavers: </h4>
                        <p className="text-neutral-500">{leavers}</p>
                    </div>
                </div>
            </div>

            <div className="text-sm m-2">
                <h4 className="font-bold">Teacher Comments:</h4>
                <h4 className="px-1 mx-2 border border-black">{ teacherComments ? teacherComments : '...'}</h4>
            </div>
            <div className="flex justify-center">
                <table className="text-xs mx-6 my-3 w-full border border-black">
                    <caption className="caption-bottom text-xs italic">
                        {`* For an overall A for there should be at least two A’s on tasks. Teachers, please enter speaking and writing results every week.`}
                    </caption>
                    <thead>
                        <tr className="bg-neutral-300">
                            <th className="w-1/3">Percentage</th>
                            <th className="w-1/3">Impact Grade</th>
                            <th className="w-1/3">Promotion Guide</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>80 - 100</td>
                            <td>A - Excellent</td>
                            <td>{`Mostly A’s -  Promote to next level`}</td>
                        </tr>
                        <tr>
                            <td>65 - 79</td>
                            <td>B - Good</td>
                            <td>{`A’s & B’s -  Consider for promotion`}</td>
                        </tr>
                        <tr>
                            <td>50 – 64</td>
                            <td>C - Developing</td>
                            <td>{`B’s & C’s - Stay in current level`}</td>
                        </tr>
                        <tr>
                            <td>35 – 49</td>
                            <td>D - Needs Improvement</td>
                            <td>{`D’s - Stay in current level`}</td>
                        </tr>
                        <tr>
                            <td>0 - 34</td>
                            <td>E - Unsatisfactory</td>
                            <td>{`E’s  - Return to previous level`}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}