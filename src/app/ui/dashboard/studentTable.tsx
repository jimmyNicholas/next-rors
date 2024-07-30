import { inter } from '@/app/ui/fonts';
import { fetchStudents } from '@/app/lib/data';

export default async function StudentsTable() {
    const students = await fetchStudents();        

    const headerStyle = "px-2 py-4 font-medium";
    const bodyStyle = "whitespace-nowrap bg-white px-3 py-3 text-sm";

    return ( 
        <div className='w-full'>
            <h1 className={`${inter.className} mb-8 text-xl md:text-2xl text-center`}>
                Students
            </h1>
            <table className="min-w-full rounded-md text-gray-900 md:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                        <tr>
                            <th scope="col" className={`${headerStyle}`}>
                                ID
                            </th>
                            <th scope="col" className={`${headerStyle}`}>
                                First Name
                            </th>
                            <th scope="col" className={`${headerStyle}`}>
                                Last Name
                            </th>
                            <th scope="col" className={`${headerStyle}`}>
                                Nickname
                            </th>
                            
                            <th scope="col" className={`${headerStyle} hidden sm:table-cell`}>
                                Reading
                            </th>
                            <th scope="col" className={`${headerStyle} hidden sm:table-cell`}>
                                Writing
                            </th>
                            <th scope="col" className={`${headerStyle} hidden sm:table-cell`}>
                                Speaking
                            </th>
                            <th scope="col" className={`${headerStyle} hidden sm:table-cell`}>
                                Listening
                            </th>
                            
                            <th scope="col" className={`${headerStyle} hidden xl:table-cell`}>
                                Participation
                            </th>
                            <th scope="col" className={`${headerStyle} hidden xl:table-cell`}>
                                Leavers
                            </th>
                            <th scope="col" className={`${headerStyle} hidden xl:table-cell`}>
                                Teacher Comments
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 text-gray-900">
                        {students.map((student) => (
                            <tr key={student.id} className="group">
                                <td className={`${bodyStyle}`}>
                                    {student.studentId}
                                </td>
                                <td className={`${bodyStyle}`}>
                                    {student.firstName}
                                </td>
                                <td className={`${bodyStyle}`}>
                                    {student.lastName}
                                </td>
                                <td className={`${bodyStyle}`}>
                                    {student.nickname}
                                </td>
                                <td className={`${bodyStyle} hidden sm:table-cell`}>
                                    {student.overallGrades.reading}
                                </td>
                                <td className={`${bodyStyle} hidden sm:table-cell`}>
                                    {student.overallGrades.writing}
                                </td>
                                <td className={`${bodyStyle} hidden sm:table-cell`}>
                                    {student.overallGrades.speaking}
                                </td>
                                <td className={`${bodyStyle} hidden sm:table-cell`}>
                                    {student.overallGrades.listening}
                                </td>    
                                <td className={`${bodyStyle} hidden xl:table-cell`}>
                                    {student.participation}
                                </td>
                                <td className={`${bodyStyle} hidden xl:table-cell`}>
                                    {student.leavers}
                                </td>
                                <td className={`${bodyStyle} hidden xl:table-cell`}>
                                    {student.teacherComments}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>

    );
}

