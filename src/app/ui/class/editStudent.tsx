import { StudentResults } from "@/app/lib/definitions";

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
                .then(updatedStudent => {
                    console.log(updatedStudent);
                    console.log('Student updated successfully!');
                    //handleStudentUpdate(updatedStudent);
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
            {/* <td colSpan={11} className={`${style} border-black`}>
                <form onSubmit={handleEditForm}>
                    <input type="text" name="studentId" value={studentId || ''} onChange={handleChange}/>
                    <input type="text" name="firstName" value={firstName || ''} onChange={handleChange}/>
                    <input type="text" name="lastName" value={lastName || ''} onChange={handleChange}/>
                    <input type="text" name="nickname" value={nickname || ''} onChange={handleChange}/>
                    <button type="submit">Submit Changes</button>
                </form>
            </td>     */}
        </tr>
    );
}
