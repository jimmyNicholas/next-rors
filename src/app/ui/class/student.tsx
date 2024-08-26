import { StudentResults } from '@/app/lib/definitions';
import { TrashIcon } from '@heroicons/react/24/outline';

export default function Student({
    student,
    captureEdit,
    changeEditState,
    style,
    refreshData,
    }: {
    student: StudentResults;
    captureEdit: (clickedStudent: any) => void;
    changeEditState: (student: StudentResults) => void;
    style: string;
    refreshData: () => void;
    }) {
        
    return (
        <tr key={student.id}>
            <td className={style}>
                {student.studentId}
            </td>
            <td className={style}>
                {student.firstName}
            </td>
            <td className={style}>
                {student.lastName}
            </td>
            <td className={style}>
                {student.nickname}
            </td>
            <td className={`${style} hidden sm:table-cell`}>
                {student.overallGrades.reading}
            </td>
            <td className={`${style} hidden sm:table-cell`}>
                {student.overallGrades.writing}
            </td>
            <td className={`${style} hidden sm:table-cell`}>
                {student.overallGrades.speaking}
            </td>
            <td className={`${style} hidden sm:table-cell`}>
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
                <button
                    onClick={() => {
                        captureEdit(student);
                        changeEditState(student);
                    }}
                >
                    Edit
                </button>
            </td>
            <td className={style}>
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
    );
};

