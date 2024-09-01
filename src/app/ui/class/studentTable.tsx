import { inter } from '@/app/ui/fonts';
import { StudentResults } from '@/app/lib/definitions';
import React, { MouseEvent, useState } from 'react';
import Student from './student';
import EditStudent from './editStudent';

export default function StudentsTable({
        studentResults,
        refreshData,
        onUpdateStudent,
        }: {
            studentResults: StudentResults[];
            refreshData: () => void;
            onUpdateStudent: (updatedStudent: StudentResults) => void;
        }) {
    
    // const [isEditing, setIsEditing] = useState(false);
    // const [editForm, setEditForm] = useState<StudentResults>({
    //     id: "",
    //     studentId: "",
    //     firstName: "",
    //     lastName: "",
    //     nickname: "",
    //     startDate: "", 
    //     endDate: "", 
    //     overallGrades: {
    //         reading: "", 
    //         writing: "", 
    //         listening: "", 
    //         speaking: "",
    //     }, 
    //     grammar: [], 
    //     vocabulary: [], 
    //     listening: [], 
    //     reading: [],  
    //     writing: [], 
    //     speaking: [],  
    //     pronunciation: [], 
    // });

    // function handleStudentUpdate(updatedStudent: StudentResults) {
    //     setIsEditing(false);
    //     onUpdateStudent(updatedStudent);
    // };

    // function handleChange(e: React.FormEvent<HTMLInputElement>) {
    //     setEditForm({
    //         ...editForm,
    //         [e.currentTarget.name]: e.currentTarget.value
    //     });        
    // };

    // function changeEditState(student: StudentResults) {
    //     if(student.id === editForm.id) {
    //         setIsEditing(isEditing => !isEditing)
    //     } else if (isEditing === false) {
    //         setIsEditing(isEditing => !isEditing)
    //     }
    // };

    // function captureEdit(clickedStudent: any) {
    //     let filtered: StudentResults[] = studentResults.filter(student => student.id === clickedStudent.id)
    //     setEditForm(filtered[0])
    // };

    const headerStyle = "px-2 py-4 font-medium";
    const bodyStyle = "whitespace-nowrap bg-white px-2 py-1 text-md";

    return ( 
        <div>
            <table className="min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-lg font-normal">
                        <tr>
                            <th scope="col" className={`${headerStyle}`}>
                                ID
                            </th>
                            <th scope="col" className={`${headerStyle}`}>
                                First Name
                            </th>
                            <th scope="col" className={`${headerStyle}`}>
                                Last Name
                            </th>
                            <th scope="col" className={`${headerStyle}`}>
                                Nickname
                            </th>
                            
                            <th scope="col" className={`${headerStyle} hidden md:table-cell`}>
                                R
                            </th>
                            <th scope="col" className={`${headerStyle} hidden md:table-cell`}>
                                W
                            </th>
                            <th scope="col" className={`${headerStyle} hidden md:table-cell`}>
                                S
                            </th>
                            <th scope="col" className={`${headerStyle} hidden md:table-cell`}>
                                L
                            </th>
                            
                            <th scope="col" className={`${headerStyle} hidden xl:table-cell`}>
                                Participation
                            </th>
                            <th scope="col" className={`${headerStyle} hidden xl:table-cell`}>
                                Leavers
                            </th>
                            <th scope="col" className={`${headerStyle} hidden xl:table-cell`}>
                                Teacher Comments
                            </th>
                            {/* <th scope="col" className={`${headerStyle}`}>
                                Save
                            </th> */}
                            <th scope="col" className={`${headerStyle}`}>
                                DEL
                            </th>
                        </tr>
                    </thead>
 
                    <tbody>
                    { studentResults.map(student => (
                            <Student 
                                key={student.id}
                                student={student}
                                style={bodyStyle}
                                refreshData={refreshData}
                                onUpdateStudent={onUpdateStudent}
                            />
                        ))}
                        {/* {isEditing?
                            (<EditStudent
                                editForm={editForm}
                                handleChange={handleChange}
                                handleStudentUpdate={handleStudentUpdate}
                                style={bodyStyle}
                                />) : null   
                        } */}
                        {/* { studentResults.map(student => (
                            <Student 
                                key={student.id}
                                student={student}
                                captureEdit={captureEdit}
                                changeEditState={changeEditState}
                                style={bodyStyle}
                                refreshData={refreshData}
                            />
                        ))} */}
                    </tbody>
            </table>
        </div>
    );
}

/*
        <div className='w-full'>
            <div className={`${inter.className} mb-8 text-xl md:text-2xl text-center`}>
            
            </div>
            <table className="min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className={`${headerStyle}`}>
                                ID
                            </th>
                            <th scope="col" className={`${headerStyle}`}>
                                First Name
                            </th>
                            <th scope="col" className={`${headerStyle}`}>
                                Last Name
                            </th>
                            <th scope="col" className={`${headerStyle}`}>
                                Nickname
                            </th>
                            
                            <th scope="col" className={`${headerStyle} hidden sm:table-cell`}>
                                Reading
                            </th>
                            <th scope="col" className={`${headerStyle} hidden sm:table-cell`}>
                                Writing
                            </th>
                            <th scope="col" className={`${headerStyle} hidden sm:table-cell`}>
                                Speaking
                            </th>
                            <th scope="col" className={`${headerStyle} hidden sm:table-cell`}>
                                Listening
                            </th>
                            
                            <th scope="col" className={`${headerStyle} hidden xl:table-cell`}>
                                Participation
                            </th>
                            <th scope="col" className={`${headerStyle} hidden xl:table-cell`}>
                                Leavers
                            </th>
                            <th scope="col" className={`${headerStyle} hidden xl:table-cell`}>
                                Teacher Comments
                            </th>
                            <th scope="col" className={`${headerStyle}`}>
                                DEL
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 text-gray-900">
                        {studentResults.map((student) => (
                            <tr key={student.id} className="group">
                                <td className={`${bodyStyle}`}>
                                    {student.studentId}
                                </td>
                                <td className={`${bodyStyle}`}>
                                    {student.firstName}
                                </td>
                                <td className={`${bodyStyle}`}>
                                    {student.lastName}
                                </td>
                                <td className={`${bodyStyle}`}>
                                    {student.nickname}
                                </td>
                                <td className={`${bodyStyle} hidden sm:table-cell`}>
                                    {student.overallGrades.reading}
                                </td>
                                <td className={`${bodyStyle} hidden sm:table-cell`}>
                                    {student.overallGrades.writing}
                                </td>
                                <td className={`${bodyStyle} hidden sm:table-cell`}>
                                    {student.overallGrades.speaking}
                                </td>
                                <td className={`${bodyStyle} hidden sm:table-cell`}>
                                    {student.overallGrades.listening}
                                </td>    
                                <td className={`${bodyStyle} hidden xl:table-cell`}>
                                    {student.participation}
                                </td>
                                <td className={`${bodyStyle} hidden xl:table-cell`}>
                                    {student.leavers}
                                </td>
                                <td className={`${bodyStyle} hidden xl:table-cell`}>
                                    {student.teacherComments}
                                </td>
                                <td className={`${bodyStyle}`}>
                                    <TrashIcon onClick={ async (e)=> {
                                            e.preventDefault();
                                   
                                            try {
                                                const response = await fetch(`/api/student/delete?id=${student.id}`, {
                                                    method: 'GET',
                                                });
                                                if (response) {
                                                    console.log('Student deleted successfully!');
                                                    
                                                }                     
                                            } catch (error) {
                                                console.error(error, 'Failed to delete student.');
                                            } finally {
                                                refreshData();
                                            }   
                                        }
                                    }/>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
        */

