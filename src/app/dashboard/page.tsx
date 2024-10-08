import { inter } from '@/app/ui/fonts';
import ClassMetaDataWrapper from '@/app/ui/class/classMetaData';
import StudentsTable from '@/app/ui/class/studentTable';

export default function Page() {

    return (
        <main>
            <h1 className={`${inter.className} mb-4 text-xl md:text-2x1`}>
                Dashboard
            </h1>
            <div className='flex gap-2 grow justify-center'>
                {/* <ClassMetaDataWrapper /> */}
            </div>
            <div>
                {/* <StudentsTable /> */}
            </div>
        </main>
    )
}

