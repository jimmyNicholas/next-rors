import { inter } from "@/app/ui/fonts";
import { CourseMetaData } from "@/app/lib/definitions";

export default function ClassMetaData({
        courseMetaData
    }: {
        courseMetaData: CourseMetaData;
    }) {

    const { 
        course, 
        className,
        teachers
    } = courseMetaData;

    const elements = [
        {
            title: 'Course',
            value: course,
        },
        {
            title: 'Class Name',
            value: className,
        },
        {
            title: 'Teachers',
            value: `${teachers.teacherOne} and ${teachers.teacherTwo}`,
        },
    ];

    return (
        <>
            {elements.map((ele, index)=> {
                return (
                    <div 
                        key={index}
                        className="rounded-lg bg-gray-50 p-0 shadow-sm text-black"
                    >
                        <div className="flex p-2">
                            <h3 className="ml-2 text-l font-medium">{ele.title}</h3>
                        </div>
                        <p className={`${inter.className}
                            rounded-xl bg-white px-7 py-2 sm:px-3 sm:py-1 text-center text-lg`}
                        >
                        {ele.value}
                        </p>
                    </div>
                );
            })}            
        </>
    );
}

