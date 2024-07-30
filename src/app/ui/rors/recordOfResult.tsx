import React from "react";


export default function RecordOfResults({
    courseMetaData,
    activeStudent,
}: {
    courseMetaData: object;
    activeStudent: object;
}) {
    const {
        course, 
        className,
        teachers,
    } = courseMetaData;

    const {
        student, 
        results,
    } = activeStudent;

    const {
        studentId,
        startDate,
        endDate,
        firstName,
        lastName,
        nickname,
        participation,
        leavers,
        teachersComments,
        overallGrades,
    } = student;

    const {
        grammar,
        vocabulary,
        listening,
        reading,
        writing,
        speaking,
        pronunciation,
    } 
    = results

    const metaDataInfo = [
        {title: 'Student', value:`${firstName} ${lastName}`},
        {title: 'Student ID', value: studentId},
        {title: 'Course', value: course},
        {title: 'Class', value: className},
        {title: 'Start Date', value: startDate},
        {title: 'Finish Date', value: endDate},
    ]

    

    return(  
        <div className="bg-white my-3">    
            <h1 className="font-bold text-black text-2xl text-center p-2"
            >Record Of Results</h1>
            <div className="grid grid-cols-10 grid-flow-row my-3">
                {metaDataInfo.map((data, index) => (
                    <React.Fragment key={index}>
                        <h3 className="border border-b-black bg-neutral-300 font-bold text-black col-span-2 p-1">{data.title}</h3>
                        <h3 className="border border-b-black text-black bg-white col-span-3 p-1">{data.value}</h3>
                    </React.Fragment>
                ))}
                <h3 className="border border-b-black bg-neutral-300 font-bold text-black col-span-2 p-1">Teachers</h3>
                <h3 className="border border-b-black text-black bg-white col-span-8 p-1">{teachers.teacherOne} and {teachers.teacherTwo}</h3>
            </div>
            <div>
                <h4 className="font-bold text-sm text-black text-center"> 
                    Write test results in percentage values 
                </h4>
                <h4 className="text-sm italic text-black text-center"> 
                    NA = Test not given, Hols = Holidays, Abs = Absent, DNS = Did not Submit
                </h4>
            </div>
            <div className="grid grid-cols-12 grid-flow-row text-black divide-x divide-y divide-black">
                <div className="col-span-2 border border-t-black p-0.5 text-center">Start Week</div>
                {[...Array(10)].map((x, i) => 
                    <div 
                        key={i}
                        className="col-span-1 font-bold p-0.5 text-center"
                    >
                    </div>
                )}
                <div className="col-span-2 font-bold p-0.5 bg-neutral-300 text-center">Week</div>
                {[...Array(10)].map((x, i) => 
                    <div 
                        key={i}
                        className="col-span-1 font-bold p-0.5 bg-neutral-300 text-center"
                    >
                        {i + 1}
                    </div>
                )}
                <div className="col-span-2 p-1">Grammar</div>
                {[...Array(10)].map((x, i) => 
                    <div 
                        key={i}
                        className="col-span-1 p-1 text-center"
                    >
                        {grammar[i]}
                    </div>
                )}
                <div className="col-span-2 p-1">Vocabulary</div>
                {[...Array(10)].map((x, i) => 
                    <div 
                        key={i}
                        className="col-span-1 p-1 text-center"
                    >
                        {vocabulary[i]}
                    </div>
                )}
                <div className="col-span-2 p-1">Listening</div>
                {[...Array(10)].map((x, i) => 
                    <div 
                        key={i}
                        className="col-span-1 p-1 text-center"
                    >
                        {listening[i]}
                    </div>
                )}
                <div className="col-span-2 p-1">Reading</div>
                {[...Array(10)].map((x, i) => 
                    <div 
                        key={i}
                        className="col-span-1 p-1 text-center"
                    >
                        {reading[i]}
                    </div>
                )}
            </div>
            <div>
                <h4 className="font-bold text-sm text-black text-center"> 
                    Select grades (A, B, C, etc) as per conversion table below
                </h4>
                <h4 className="text-sm italic text-black text-center"> 
                    NA = Test not given, Hols = Holidays, Abs = Absent, DNS = Did not Submit
                </h4>
            </div>
            <div className="grid grid-cols-12 grid-flow-row text-black divide-x divide-y divide-black">
                <div className="border border-t-black border-l-black col-span-2 font-bold p-0.5 bg-neutral-300 text-center">Week</div>
                    {[...Array(10)].map((x, i) => 
                        <div 
                            key={i}
                            className="col-span-1 font-bold p-0.5 bg-neutral-300 text-center"
                        >
                            {i + 1}
                        </div>
                    )}
                <div className="col-span-2 p-1">Writing</div>
                {[...Array(10)].map((x, i) => 
                    <div 
                        key={i}
                        className="col-span-1 p-1 text-center"
                    >
                        {writing[i]}
                    </div>
                )}
                <div className="col-span-2 p-1">Speaking</div>
                {[...Array(10)].map((x, i) => 
                    <div 
                        key={i}
                        className="col-span-1 p-1 text-center"
                    >
                        {speaking[i]}
                    </div>
                )}
                <div className="col-span-2 p-1">Pronunciation</div>
                {[...Array(10)].map((x, i) => 
                    <div 
                        key={i}
                        className="col-span-1 p-1 text-center"
                    >
                        {pronunciation[i]}
                    </div>
                )}
            </div>
            <div className="grid grid-cols-5 grid-flow-row text-black">
                <div className="col-start-2 col-span-3 grid grid-cols-4 grid-flow-row divide-y divide-black">
                    <h4 className="col-span-4 font-bold p-0.5 bg-neutral-300 text-center">Overall</h4>
                    <h4 className="col-span-1 font-bold p-0.5 bg-neutral-300 text-center">Reading</h4>
                    <h4 className="col-span-1 font-bold p-0.5 bg-neutral-300 text-center">Writing</h4>
                    <h4 className="col-span-1 font-bold p-0.5 bg-neutral-300 text-center">Speaking</h4>
                    <h4 className="col-span-1 font-bold p-0.5 bg-neutral-300 text-center">Listening</h4>
                    <h4 className="col-span-1 p-2 text-center">{overallGrades.reading}</h4>
                    <h4 className="col-span-1 p-2 text-center">{overallGrades.writing}</h4>
                    <h4 className="col-span-1 p-2 text-center">{overallGrades.speaking}</h4>
                    <h4 className="col-span-1 p-2 text-center">{overallGrades.listening}</h4>
                </div>
            </div>
            <div>
                <div className="text-black flex justify-center">
                    <h4 className="font-bold">Participation: </h4>
                    <p className="text-neutral-400">{participation}</p>
                </div>
            </div>
        </div>
    );
}