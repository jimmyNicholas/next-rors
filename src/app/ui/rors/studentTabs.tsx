import clsx from 'clsx';
import { StudentTabsText } from "@/app/lib/definitions"

export default function StudentTabsWrapper({
    activeIndex,
    setActiveIndex,
    studentTabsText,
}: {
    activeIndex: number;
    setActiveIndex: Function;
    studentTabsText: StudentTabsText[];
}) {

    return (
        <div className="grid lg:grid-cols-9 md:grid-cols-6 text-black gap-2 w-6xl">
            {studentTabsText.map((student, index: number) => (
                <StudentTab 
                    key={index}
                    index={index} 
                    studentId={student.studentId}
                    firstName={student.firstName}
                    isActive={index === activeIndex ? true : false} 
                    setActiveIndex={setActiveIndex}
                />
            ))}
        </div>
    );
}

export function StudentTab({
    index,
    studentId,
    firstName,
    isActive,
    setActiveIndex,
}: {
    index: number;
    studentId: number | string;
    firstName: string;
    isActive: boolean;
    setActiveIndex: Function;
}) {
    return (
        <div 
            onClick={() => setActiveIndex(index)}
            className={clsx("rounded-lg bg-gray-50 p-1 shadow-sm text-black hover:bg-sky-100 hover:text-blue-600 hover:cursor-pointer",
                {
                    "bg-sky-200 text-blue-600": isActive,
                },
            )}
            >
            <h3 className="block lg:block sm:hidden">{studentId}</h3>
            <h3>{firstName}</h3>
        </div>
    );
}