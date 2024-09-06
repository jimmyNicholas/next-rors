
export function formatDate(dateString: string) {
    const date = new Date(dateString);    
    console.log(new Intl.DateTimeFormat('en-AU').format(date));
    
    return new Intl.DateTimeFormat('en-AU').format(date);//.replace(/\//g, ' / ');
};

export function formatDateForInput(dateString: string) {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
};

