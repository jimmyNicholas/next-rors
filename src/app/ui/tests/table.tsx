import { StudentResults } from "@/app/lib/definitions";
import { Row } from "./row";

export function Table({ 
    activeWeek,
    studentResults,
    onUpdateStudent,
} : {
    activeWeek: number,
    studentResults: StudentResults[];
    onUpdateStudent: (updatedStudent: StudentResults) => void;
    }
) {
    if (typeof studentResults === 'undefined') {
        return;
    }

    // const tableRef = useRef<HTMLTableElement>(null);
    // function handleKeyDown(e: React.KeyboardEvent<HTMLTableCellElement>, rowIndex: number, colIndex: number) {
    //     const table = tableRef.current;

    //     if (!table) {return};
    //     const numRows = table.rows.length;
    //     const numCols = table.rows[0].cells.length;
    //     console.log(e.key);
        
    //     const targetCell = e.currentTarget as HTMLTableCellElement;
    //     console.log(table.rows[rowIndex + 1].cells[colIndex]);
        

    //     switch (e.key) {
    //         case 'ArrowDown':
    //             if (rowIndex < numRows - 1) {
    //                 (table.rows[rowIndex + 1].cells[colIndex]).focus();
    //             }
    //             break;
    //         case 'ArrowUp':
    //             if (rowIndex > 0) {
    //                 (table.rows[rowIndex - 1].cells[colIndex]).focus();
    //             }
    //             break;
    //         case 'ArrowRight':
    //             if (rowIndex < numCols - 1) {
    //                 (table.rows[rowIndex].cells[colIndex + 1]).focus();
    //             }
    //             break;
    //         case 'ArrowLeft':
    //             if (rowIndex > 0) {
    //                 (table.rows[rowIndex].cells[colIndex - 1]).focus();
    //             }
    //             break;
    //         default:
    //             break;
    //     }
    // };


    return (
        <div className="bg-white text-black">
            <table 
                className="bg-white text-black table-auto border-collapse w-full text-sm"
                >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Grammar</th>
                        <th>Vocabulary</th>
                        <th>Listening</th>
                        <th>Reading</th>
                        <th>Writing</th>
                        <th>Speaking</th>
                        <th>Pronunciation</th>
                    </tr>
                </thead>
                <tbody>    
                    {studentResults.map((student, rowIndex) => (
                        <Row 
                            key={student.id}
                            student={student}
                            activeWeek={activeWeek}
                            onUpdateStudent={onUpdateStudent}
                        />
                    ))}
                </tbody>
            </table>
        </div>   
    )
}

