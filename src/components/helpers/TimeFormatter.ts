function formatTime(date: Date | string, format: string = 'HH:mm'): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    let hours = dateObj.getHours();
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');

    switch (format) {
        case 'HH:mm':
            return `${hours.toString().padStart(2, '0')}:${minutes}`;
        case 'hh:mm A': {
            const period = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;
            return `${hours.toString().padStart(2, '0')}:${minutes} ${period}`;
        }
        case 'hh:mm a': {
            const period = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12 || 12;
            return `${hours.toString().padStart(2, '0')}:${minutes} ${period}`;
        }
        default:
            throw new Error(`Unsupported format: ${format}`);
    }
}

export default formatTime;
