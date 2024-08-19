import clsx from 'clsx';

export function WeekTabs({
    weeks = 10,
    activeWeek,
    setActiveWeek,
} : {
    weeks?: number;
    activeWeek: number;
    setActiveWeek: Function;
}) {

    return (
        <div className="grid grid-flow-col bg-white text-black text-center">
            <div className='bg-neutral-300 border border-black'>Week</div>
            {[...Array(weeks)].map((x, index) => {
                const week = index + 1;
                return (
                <div
                    key={index}
                    onClick={() => setActiveWeek(week)}
                    className={clsx("border border-black hover:bg-sky-100 hover:text-blue-600 hover:cursor-pointer", 
                        {
                            "bg-sky-200 text-blue-600" : activeWeek === week, 
                    },  
                    )}
                >
                    {`${week}`}
                </div>
            )
            })}
        </div>
    )

}