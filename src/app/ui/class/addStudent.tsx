export default function AddStudent() {

    const elements = [
        {
            label: 'ID:',
            name: 'studentId'
        },
        {
            label: 'First Name:',
            name: 'firstName'
        },
        {
            label: 'Last Name:',
            name: 'lastName'
        },
        {
            label: 'Nickname: ',
            name: 'nickname'
        },
    ];

    return (
        <>
            <form className="grid grid-flow-row grid-cols-4 bg-white">
                <button 
                    type="submit"
                    className="bg-green-300 text-black col-span-4"
                >
                    Add New Student
                </button>

                {elements.map((ele) => {
                    return (
                        <div 
                            key={ele.name}
                            className="grid grid-cols-subgrid col-span-2"
                        >
                            <label
                                className="text-black pl-2"
                            >
                            {ele.label} 
                            </label>
                            <input 
                                type="text" 
                                name={ele.name} 
                                className="border border-black"
                            />
                        </div>
                    );
                })}
            </form>
        </>
    )
};