import { StudentResults } from "@/app/lib/definitions";

export function Table({ 
    activeWeek,
    studentResults,
} : {
    activeWeek: number,
    studentResults: StudentResults[];
    }
) {
    if (typeof studentResults === 'undefined') {
        return;
    }

    return (
        <div className="bg-white text-black">

            <table className="bg-white text-black table-auto border-collapse w-full text-sm">
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
            
            {studentResults.map((student, index) => (
                <tr key={index}>
                    <td>{student.studentId}</td>
                    <td>{student.firstName}</td>
                    <td>{student.grammar[activeWeek - 1]}</td>
                    <td>{student.vocabulary[activeWeek - 1]}</td>
                    <td>{student.listening[activeWeek - 1]}</td>
                    <td>{student.reading[activeWeek - 1]}</td>
                    <td>{student.writing[activeWeek - 1]}</td>
                    <td>{student.speaking[activeWeek - 1]}</td>
                    <td>{student.pronunciation[activeWeek - 1]}</td>
                </tr>
            ))}
        </tbody>
    </table>
        </div>
        
    )
}