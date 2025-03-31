export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

export const truncateText = (text: string, length: number): string => {
    return text.length > length ? text.substring(0, length) + '...' : text;
};

export const generateSlug = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .trim(); // Trim - from start and end
};