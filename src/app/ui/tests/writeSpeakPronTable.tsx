import { WriteSpeakPronResults } from "@/app/lib/definitions";

export default function WriteSpeakPronTable({ 
    writeSpeakPronResults
} : {
    writeSpeakPronResults: WriteSpeakPronResults[];
    }
) {

    return (
        <div>
            <table className="bg-white text-black table-auto border-collapse w-full text-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Week</th>
                        <th>Writing</th>
                        <th>Speaking</th>
                        <th>Pronunciation</th>
                    </tr>
                </thead>
                <tbody>
                    {writeSpeakPronResults.map((test) => (
                        test.results.map((result, index) => (
                            <tr key={index}>
                                <td>{result.studentId}</td>
                                <td>{result.firstName}</td>
                                <td>{test.week}</td>
                                {result.writing ? (
                                    <td>{result.writing}</td>
                                ) : (
                                    <td>-</td>
                                )}
                                {result.speaking ? (
                                    <td>{result.speaking}</td>
                                ) : (
                                    <td>-</td>
                                )}
                                {result.pronunciation ? (
                                    <td>{result.pronunciation}</td>
                                ) : (
                                    <td>-</td>
                                )}
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </div>
    )
}