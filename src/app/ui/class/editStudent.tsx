import { StudentResults } from "@/app/lib/definitions";
import { convertStudentResults } from "@/app/lib/caseConversion";

export default function EditStudent({
    editForm,
    handleChange,
    handleStudentUpdate,
    style,
    }: {
    editForm: StudentResults;
    handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
    handleStudentUpdate: (updatedStudent: StudentResults) => void;
    style: string;
}) {
    const {id, studentId, firstName, lastName, nickname} = editForm;

    async function handleEditForm(e: any) {
        e.preventDefault();
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
        }
    }

    return (
        <tr>
            <td className={`${style}`}>
                <input type="text" name="studentId" value={studentId || ''} onChange={handleChange}/>
            </td>
            <td className={`${style}`}> 
                <input type="text" name="firstName" value={firstName || ''} onChange={handleChange}/>
            </td>
            <td className={`${style}`}>
                <input type="text" name="lastName" value={lastName || ''} onChange={handleChange}/>
            </td>
            <td className={`${style}`}>
                <input type="text" name="nickname" value={nickname || ''} onChange={handleChange}/>
            </td>
            <td className={`${style}`}>
                <button type="submit" onClick={handleEditForm}>Submit Changes</button>
            </td>    
        </tr>
    );
}
