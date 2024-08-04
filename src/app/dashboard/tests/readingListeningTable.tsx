import { ReadingResults, ListeningResults } from "@/app/lib/definitions";

export default function ReadingListeningTable({ 
    readingResults,
    listeningResults,
} : {
    readingResults: ReadingResults[];
    listeningResults: ListeningResults[];
    }
) {
    return (
        <div>
            <table className="bg-white text-black table-auto border-collapse w-full text-sm">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Week</th>
                        <th>Skill</th>
                        <th>Part 1</th>
                        <th>Part 2</th>
                        <th>Part 3</th>
                        <th>Part 4</th>
                        <th>Abs</th>
                    </tr>
                </thead>
                <tbody>
                    {[...readingResults, ...listeningResults].map((test) => (
                        test.results.map((result, index) => (
                            <tr key={index}>
                                <td>{test.date}</td>
                                <td>{result.studentId}</td>
                                <td>{result.firstName}</td>
                                <td>{test.week}</td>
                                <td>{test.skill}</td>
                                {result.absent ? (
                                    <>
                                        <td colSpan={4}></td>
                                        <td>✔</td>
                                    </>
                                ) : (
                                    <>
                                        <td>{result.partOne}</td>
                                        <td>{result.partTwo}</td>
                                        <td>{result.partThree}</td>
                                        <td>{result.partFour}</td>   
                                    </>
                                )}
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </div>
    )
}