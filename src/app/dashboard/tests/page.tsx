'use client';

import { useState, useEffect } from "react";

import { fetchResults } from "@/app/lib/data";
import { TestResults } from "@/app/lib/definitions";
import TestInterface from "@/app/ui/tests/testsInterface";
import { Table } from "@/app/ui/tests/table";
import GrammarVocabularyTable from "../../ui/tests/grammarVocabularyTable";
import ReadingListeningTable from "../../ui/tests/readingListeningTable";
import WriteSpeakPronTable from "../../ui/tests/writeSpeakPronTable";

export default function Page () {
    const [testResults, setTestResults] = useState<TestResults | undefined>(undefined);
    const [loading, setLoading] = useState(true);
    const [activeTest, setActiveTest] = useState('G1');

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

    console.log(testResults[activeTest]);
    

    return (
        <div className="grid gap-5">
            <p>Tests Page</p>
            <TestInterface setActiveTest={setActiveTest}/>
            <Table activeTest={testResults[activeTest]}/>

            {/* {!loading && testResults ? (
                <GrammarVocabularyTable grammarVocabularyResults={testResults.grammarVocabularyResults}/>
            ) : null} */}

            {/* {!loading && testResults ? (
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
            ) : null} */}
        </div>
    )
}