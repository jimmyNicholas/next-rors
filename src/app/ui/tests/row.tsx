import { useState } from "react";
import { StudentResults } from "@/app/lib/definitions";
import { convertStudentResults } from "@/app/lib/caseConversion";

export function Row({
        student,
        activeWeek,
        onUpdateStudent,
    } : {
        student: StudentResults;
        activeWeek: number;
        onUpdateStudent: (updatedStudent: StudentResults) => void;
    }
    ) {
    const {
        id,
        studentId,
        firstName,
        grammar,
        vocabulary,
        listening,
        reading,
        writing,
        speaking,
        pronunciation,
    } = student;
    
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState<StudentResults>(student);
    
    function handleStudentUpdate(updatedStudent: StudentResults) {
        setIsEditing(false);
        onUpdateStudent(updatedStudent);
    };

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        const {name, value} = e.currentTarget;

        const editArray = editForm[name as keyof StudentResults];
        let skillArray;
        if(Array.isArray(editArray)) {
            skillArray = [...editArray];       
        } else {
            return;
        }

        setEditForm({
            ...editForm,
            [name as keyof StudentResults]: [
                ...skillArray.slice(0, activeWeek - 1),
                value,
                ...skillArray.slice(activeWeek)
            ]
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
        const {
            id, 
            grammar, 
            vocabulary,
            listening,
            reading,
            writing,
            speaking,
            pronunciation,
        } = editForm;
    
        if (JSON.stringify(editForm) === JSON.stringify(student)) {
            setIsEditing(false);
            return;
        };

        const skills = [
            { key: 'grammar', value: grammar}, 
            { key: 'vocabulary', value: vocabulary}, 
            { key: 'listening', value: listening}, 
            { key: 'reading', value: reading}, 
            { key: 'writing', value: writing}, 
            { key: 'speaking', value: speaking}, 
            { key: 'pronunciation', value: pronunciation}, 
        ];
        
        const query = skills.map((skill) => {
            if (typeof skill.value[activeWeek - 1] === 'undefined') {
                return '';
            } else {
                return `&${skill.key}=${skill.value[activeWeek - 1]}`;
            }
        }).join('');
        
        try {
            await fetch(
                `/api/student/testUpdate?id=${id}&activeWeek=${activeWeek}${query}`)
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

    const cols = [
        {
            type: "number",
            name: "grammar",
            value: isEditing? editForm.grammar[activeWeek - 1]: grammar[activeWeek - 1] || '',
        },
        {
            type: "text",
            name: "vocabulary",
            value: isEditing? editForm.vocabulary[activeWeek - 1]: vocabulary[activeWeek - 1] || '',
        },
        {
            type: "text",
            name: "listening",
            value: isEditing? editForm.listening[activeWeek - 1]: listening[activeWeek - 1] || '',
        },
        {
            type: "text",
            name: "reading",
            value: isEditing? editForm.reading[activeWeek - 1]: reading[activeWeek - 1] || '',
        },
        {
            type: "text",
            name: "writing",
            value: isEditing? editForm.writing[activeWeek - 1]: writing[activeWeek - 1] || '',
        },
        {
            type: "text",
            name: "speaking",
            value: isEditing? editForm.speaking[activeWeek - 1]: speaking[activeWeek - 1] || '',
        },
        {
            type: "text",
            name: "pronunciation",
            value: isEditing? editForm.pronunciation[activeWeek - 1]: pronunciation[activeWeek - 1],
        },
    ];

    return (
        <tr key={id} className="border-black border-2">
            <td>{studentId}</td>
            <td>{firstName}</td>
            {cols.map((col, index) => (
                <td key={index}>
                    {isEditing? (
                        <input
                            type={col.type}
                            name={col.name}
                            value={col.value || ''} 
                            onChange={handleChange} 
                            onClick={handleOnClick}
                            onBlur={handleEditForm}
                            className="border-black border-2 h-8 max-w-12"
                        />
                    ) : (
                        <p 
                            onClick={handleOnClick}
                            className="border-black border-2 h-8 max-w-12"
                        >{col.value}</p>
                    )}
                </td>
            ))}
        </tr>
    )
};