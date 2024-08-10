import { TestResult } from "@/app/lib/definitions";

export function Table({ 
    activeTest,
} : {
    activeTest: TestResult;
    }
) {
    if (typeof activeTest === 'undefined') {
        return;
    }

    const {
        week, 
        skill,
        date,
        totalQuestions,
        results,
    } = activeTest;


    let baseHeaders = [
        { 
            label: 'Week', 
            value: week,
        },
        { 
            label: 'Skill', 
            value: skill,
        },
        { 
            label: 'Date', 
            value: date || '-',
        },
        { 
            label: 'Total Questions', 
            value: totalQuestions || '-',
        } 
    ];    

    const baseColumns = [''];


    return (
        <div className="bg-white text-black">
            {baseHeaders.map((header, index) => {
                return (
                    <div key={index}>
                         <h3>{header.label}: {header.value}</h3>
                    </div>
                )
            })}

            <table className="bg-white text-black table-auto border-collapse w-full text-sm">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Part 4</th>
                <th>Part 5</th>
                <th>Total</th>
                <th>Abs</th>
            </tr>

        </thead>
        <tbody>
            {results.map((test, index) => (
                <tr key={index}>
                    <td>{test.studentId}</td>
                    <td>{test.firstName}</td>
                    {test.absent ? (
                        <>
                            <td colSpan={4}></td>
                            <td>✔</td>
                        </>
                    ) : (
                        <>
                            {/* <td>{result.partTwo}</td>
                            <td>{result.partThree}</td> */}
                            <td>{test.partFour}</td>
                            <td>{test.partFive}</td>
                            <td>{test.partFour + test.partFive}</td>
                        </>
                    )}
                    
                </tr>
            ))}
        </tbody>
    </table>
        </div>
        
    )
}