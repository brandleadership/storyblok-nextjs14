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
