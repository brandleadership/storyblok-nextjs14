const DateFormatter = (textToFormat: string | Date): string => {
    if (!textToFormat) {
        return '';
    }

    const date = new Date(textToFormat);
    const yyyy = date.getFullYear();
    const mm: number = date.getMonth() + 1;
    const dd: number = date.getDate();

    const formattedDd = dd < 10 ? '0' + dd : dd.toString();
    const formattedMm = mm < 10 ? '0' + mm : mm.toString();

    const formattedDay = `${formattedDd}.${formattedMm}.${yyyy}`;

    return formattedDay ?? '';
};

export default DateFormatter;

// function DateFormatter(date: Date | string, format: string = 'DD/MM/YYYY'): string {
//     const dateObj = typeof date === 'string' ? new Date(date) : date;
//     const day = dateObj.getDate().toString().padStart(2, '0');
//     const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
//     const year = dateObj.getFullYear().toString();
//     switch (format) {
//         case 'DD/MM/YYYY': return `${day}/${month}/${year}`;
//         case 'MM-DD-YYYY': return `${month}-${day}-${year}`;
//         case 'YYYY-MM-DD': return `${year}-${month}-${day}`;
//         default: throw new Error(`Unsupported format: ${format}`);
//     }
// }

// export default DateFormatter;
