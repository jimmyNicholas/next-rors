export default function Row({
        title,
        cols = 10,
        array = Array(cols),
        style = "",
        onClick = undefined,
    }: {
        title: string;
        cols?: number;
        array?: (string|number)[];
        style?: string;
        onClick?: (arg: string) => void;
    }) {        

        return (
            <>
                <div className={`col-span-2 p-0.5 ${style}`}>{title}</div>
                {[...array, ...Array(cols - array.length)].map((x, i) =>                     
                    <div 
                        key={i}
                        className={`col-span-1 p-0.5 text-center ${style}`}
                        onClick={() => onClick && onClick(`${title[0]}${i + 1}`)}
                    >
                        {array[i]}
                    </div>
                )}
            </>
        );
    };
