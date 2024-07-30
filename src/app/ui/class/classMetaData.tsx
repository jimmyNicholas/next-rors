import { fetchCourseMetaData } from "@/app/lib/data";
import { inter } from "@/app/ui/fonts";

export default async function ClassMetaDataWrapper() {
    const { 
        course, 
        className,
        teachers
    } = await fetchCourseMetaData();

    return (
        <>
            <ClassMetaData title='Course' value={course}/>
            <ClassMetaData title='Class Name' value={className}/>
            <ClassMetaData 
                title='Teachers' 
                value={`${teachers.teacherOne} and ${teachers.teacherTwo}`}
            />
        </>
    );
}

export function ClassMetaData({
    title,
    value
}: {
    title: string;
    value: number | string;
}) {
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm text-black">
             <div className="flex p-2">
                <h3 className="ml-2 text-l font-medium">{title}</h3>
            </div>
            <p className={`${inter.className}
                rounded-xl bg-white px-7 py-2 sm:px-3 sm:py-1 text-center text-2xl`}
            >
                {value}
            </p>
        </div>
    )
};

/*
    return (
        <div>
            <table className={`${inter.className} min-w-full rounded-md text-gray-900 md:table`}>
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                    <tr>
                        <th scope="col" className='px-2 py-4 font-medium'>
                            Course
                        </th>
                        <th scope="col" className='px-2 py-4 font-medium'>
                            Class Name
                        </th>
                        <th scope="col" className='px-2 py-4 font-medium'>
                            Teachers
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="whitespace-nowrap bg-white px-3 py-3 text-sm">
                            {course}
                        </td>
                        <td className="whitespace-nowrap bg-white px-3 py-3 text-sm">
                            {className}
                        </td>
                        <td className="whitespace-nowrap bg-white px-3 py-3 text-sm">
                            {`${teachers.teacherOne} and ${teachers.teacherTwo}`}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
*/

