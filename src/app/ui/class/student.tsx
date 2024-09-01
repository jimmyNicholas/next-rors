import { StudentResults } from '@/app/lib/definitions';
import { TrashIcon } from '@heroicons/react/24/outline';
import { convertStudentResults } from "@/app/lib/caseConversion";
import { useState } from 'react';

export default function Student({
    student,
    style,
    refreshData,
    onUpdateStudent,
    }: {
    student: StudentResults;
    style: string;
    refreshData: () => void;
    onUpdateStudent: (updatedStudent: StudentResults) => void;
    }) {
        
    const [isEditing, setIsEditing] = useState(false);

    const {id, studentId, firstName, lastName, nickname} = student;
    const [editForm, setEditForm] = useState<StudentResults>(student);
    
    function handleStudentUpdate(updatedStudent: StudentResults) {
        setIsEditing(false);
        onUpdateStudent(updatedStudent);
    };

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        const {name, value} = e.currentTarget;
        setEditForm({
            ...editForm,
            [name]: value
        }); 
        setIsEditing(true);       
    };

    function handleOnClick(e: React.MouseEvent<HTMLInputElement>) {
        const {name, value} = e.currentTarget;
        if (value === student[name as keyof StudentResults]) {
            setEditForm({
                ...editForm,
                [name]: value
            }); 
        }
        setIsEditing(true);
    }

    async function handleEditForm(e: any) {
        e.preventDefault();
        const {id, studentId, firstName, lastName, nickname} = editForm;

        if (JSON.stringify(editForm) === JSON.stringify(student)) {
            setIsEditing(false);
            return;
        }
        try {
            await fetch(
                `/api/student/update?id=${id}&studentId=${studentId}&firstName=${firstName}&lastName=${lastName}&nickname=${nickname}`)
                .then(res => res.json())
                .then(res => {
                    console.log(res.student.rows);
                    console.log('Student updated successfully!');
                    const updatedStudent = convertStudentResults(res.student.rows[0]);
                    handleStudentUpdate(updatedStudent);
                })
        } catch (error) {
            console.error(error, 'Failed to update student.');
        } finally {
            setIsEditing(false);
        }
    };
    /*
    async function handleStudentEdits(e: any) {
        e.preventDefault();
        if (JSON.stringify(editForm) === JSON.stringify(student)) {
            setIsEditing(false);
            return;
        }

        const api = `/api/student/update?`;
        const urlParams = student.map((edit) => {
            const key = Object.keys(edit)[0];
            const value = Object.values(edit)[0];         
            return `${key}=${value}`
        }).join('&');        
        try {
            await fetch( api + urlParams)
                .then(res => res.json())
                .then(res => {
                    console.log(res.student.rows);
                    console.log('Student updated successfully!');
                    const updatedStudent = convertStudentResults(res.student.rows[0]);
                    handleStudentUpdate(updatedStudent);
                })
        } catch (error) {
            console.error(error, 'Failed to update student.');
        } finally {
            setIsEditing(false);
        }
    }
    */

    async function handleDeleteStudent(e: any) {
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
    };
    
    const cols = [
        {
            type: "text",
            name: "studentId",
            value: isEditing? editForm.studentId : studentId,
            style,
            maxWidth: "max-w-14",
        },
        {
            type: "text",
            name: "firstName",
            value: isEditing? editForm.firstName : firstName,
            style,
            maxWidth: "max-w-40",
        },
        {
            type: "text",
            name: "lastName",
            value: isEditing? editForm.lastName : lastName,
            style,
            maxWidth: "max-w-40",
        },
        {
            type: "text",
            name: "nickname",
            value: isEditing? editForm.nickname : nickname,
            style,
            maxWidth: "max-w-20",
        },
    ];

    return (
        <tr key={student.id} className={`border-2 ${isEditing ? 'text-orange-500' : ''}`}>
            {cols.map((col, index) => (
                <td key={index} className={col.style}>
                    {isEditing? (
                        <input 
                            className={`${col.maxWidth} ${col.style}`}
                            type={col.type} 
                            name={col.name}
                            value={col.value} 
                            onChange={handleChange} 
                            onClick={handleOnClick}
                            onBlur={handleEditForm}
                    />
                    ) : (<p 
                            onClick={handleOnClick}
                            className={`${col.maxWidth} ${col.style}`}
                        >{col.value}</p>)
                    }  
                </td>   
            ))}
  
            <td className={`${style} hidden md:table-cell`}>
                {student.overallGrades.reading}
            </td>
            <td className={`${style} hidden md:table-cell`}>
                {student.overallGrades.writing}
            </td>
            <td className={`${style} hidden md:table-cell`}>
                {student.overallGrades.speaking}
            </td>
            <td className={`${style} hidden md:table-cell`}>
                {student.overallGrades.listening}
            </td>    
            <td className={`${style} hidden xl:table-cell`}>
                {student.participation}
            </td>
            <td className={`${style} hidden xl:table-cell`}>
                {student.leavers}
            </td>
            <td className={`${style} hidden xl:table-cell`}>
                {student.teacherComments}
            </td>
            <td className={style}>
                <TrashIcon onClick={handleDeleteStudent}/>
            </td>
        </tr>
    );
};
