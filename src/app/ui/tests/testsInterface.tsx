import Row from "../utility/Row";

export default function TestInterface({
    setActiveTest,
} : {
    setActiveTest: Function;
}) {
    
    function onClick(testLabel: string) {
        console.log(testLabel);
        setActiveTest(testLabel);
    }

    const skills = ['Grammar', 'Vocabulary', 'Listening', 'Reading', 'Writing', 'Speaking', 'Pronunciation'];

    return (
        <>
            <div className="grid grid-cols-12 grid-flow-row mb-3 border border-black bg-black text-black rounded-lg gap-1">
                <Row title='Week' array={[...Array(10)].map((x, i) => i + 1)} style={'font-bold text-center bg-slate-300'}/>    
                {skills.map((skill) => {
                    return <Row key={skill} title={skill} array={[...Array(10)]} style={'px-1 bg-white'} onClick={onClick}/>
                })}
                
            </div>
        </>
    );
}