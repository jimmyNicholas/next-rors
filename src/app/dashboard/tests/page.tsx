'use client';

import { useState, useEffect } from "react";

import { fetchResults } from "@/app/lib/data";
import { TestResults } from "@/app/lib/definitions";
import GrammarVocabularyTable from "./grammarVocabularyTable";
import ReadingListeningTable from "./readingListeningTable";
import WriteSpeakPronTable from "./writeSpeakPronTable";

export default function Page () {
    const [testResults, setTestResults] = useState<TestResults | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTestResults() {
            try {
                const testResults: TestResults = await fetchResults();
                setTestResults(testResults)
            } catch (error) {
                console.error('Results Fetch Error', error);
            } finally {
                setLoading(false);
            }
        }
        fetchTestResults();
    }, []);

    if (loading) return <p>Loading...</p>;
    return (
        <div className="grid gap-5">
            <p>Tests Page</p>
            {!loading && testResults ? (
                <GrammarVocabularyTable grammarVocabularyResults={testResults.grammarVocabularyResults}/>
            ) : null}
            
            {!loading && testResults ? (
                <ReadingListeningTable 
                    readingResults={testResults.readingResults} 
                    listeningResults={testResults.listeningResults}
                />
            ) : null}

            {!loading && testResults ? (
                <WriteSpeakPronTable
                    writeSpeakPronResults={testResults.writeSpeakPronResults} 
                />
            ) : null}
        </div>
    )
}