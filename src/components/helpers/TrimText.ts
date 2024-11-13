const TrimText = (text: string, cutValue: number = 160, ellipsis = '...') => {
    if (
        typeof text !== 'string' ||
        typeof cutValue !== 'number' ||
        cutValue <= 0
    ) {
        throw new Error(
            'Invalid input: text must be a string and cutValue must be a positive number.'
        );
    }

    const trimmedString =
        text.length > cutValue
            ? text.substring(0, cutValue - ellipsis.length) + ellipsis
            : text.trim();

    return trimmedString;
};

export default TrimText;
