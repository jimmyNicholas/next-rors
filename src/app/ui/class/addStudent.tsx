export default function AddStudent({
    courseMetaDataId,
    refreshData,
    }: {
        courseMetaDataId: number;
        refreshData: () => void;
    }) {

    const elements = [
        {
            label: 'ID',
            name: 'studentId',
            type: 'text'
        },
        {
            label: 'Start Date',
            name: 'startDate',
            type: 'date'
        },
        {
            label: 'First Name',
            name: 'firstName',
            type: 'text'
        },
        {
            label: 'Last Name',
            name: 'lastName',
            type: 'text'
        },
    ];

    return (
        <>
            <form 
                className="grid grid-flow-row grid-cols-4"
                method="get"
                onSubmit={async (e) => {
                    e.preventDefault();

                    const form = e.target as HTMLFormElement;
                    const formData = new FormData(form);

                    const queryParams = new URLSearchParams(formData as any).toString();
                    const nonFormQueryParams = `courseMetaDataId=${encodeURIComponent(courseMetaDataId)}`;

                    try {
                        const response = await fetch(`/api/student/add?${queryParams}&${nonFormQueryParams}`, {
                            method: 'GET',
                        });
            
                        if (!response.ok) {
                            throw new Error('Failed to submit form');
                        }
                        console.log('Student added successfully!');  
                    } catch (error) {
                        console.error(error, 'Failed to add student.');
                    } finally {
                        form.reset();
                        refreshData();
                    }  
                }}
            >
                <h2
                    className="bg-neutral-300 text-black col-span-4 text-center p-1"
                >
                    New Student
                </h2>

                {elements.map((ele) => {
                    return (
                        <div 
                            key={ele.name}
                            className="grid grid-cols-subgrid col-span-2 text-black bg-white"
                        >
                            <label
                                className="pl-2"
                            >
                            {ele.label}:
                            </label>
                            <input 
                                type={ele.type}
                                name={ele.name} 
                                className="border border-black"
                            />
                        </div>
                    );
                })}

                <button 
                    type="submit"
                    className="bg-green-300 text-black col-span-4 p-1 rounded-lg my-1"
                >
                    Add
                </button>
            </form>
        </>
    )
};