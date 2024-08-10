import { GrammarVocabularyResults } from "@/app/lib/definitions";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";


export default function GrammarVocabularyTable({ 
    grammarVocabularyResults,
} : {
    grammarVocabularyResults: GrammarVocabularyResults[];
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
                        <th>Part 2</th>
                        <th>Part 3</th>
                        <th>Part 4</th>
                        <th>Part 5</th>
                        <th>Abs</th>
                    </tr>

                </thead>
                <tbody>
                    {grammarVocabularyResults.map((test) => (
                        test.results.map((result, index) => (
                            <tr key={index}>
                                <td>{test.date}</td>
                                <td>{result.studentId}</td>
                                <td>{result.firstName}</td>
                                <td>{test.week}</td>
                                {result.absent ? (
                                    <>
                                        <td colSpan={4}></td>
                                        <td>✔</td>
                                    </>
                                ) : (
                                    <>
                                        <td>{result.partTwo}</td>
                                        <td>{result.partThree}</td>
                                        <td>{result.partFour}</td>
                                        <td>{result.partFive}</td>
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