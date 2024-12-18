const formatTime = (date) => {
    date = new Date(date);
    const now = new Date();
    const diffInMs = now - date;
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInYears = now.getFullYear() - date.getFullYear();

    if (diffInHours < 24) {
        return `${diffInHours}h`;
    } else if (diffInDays < 15) {
        return `${diffInDays}d`;
    } else if (diffInYears === 0) {
        return date.toLocaleDateString("pt-BR", { month: "long", day: "numeric" });
    } else {
        return date.toLocaleDateString("pt-BR", { month: "long", day: "numeric", year: "numeric" });
    }
}

const diffInHours = (date1, date2) => {
    date1 = new Date(date1);
    date2 = new Date(date2);
    const diffInMs = date1 - date2;
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    return Math.floor(diffInMinutes / 60);
}

export { formatTime, diffInHours }