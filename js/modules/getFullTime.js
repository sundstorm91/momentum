export function getFullTime (duration) {
    let seconds = parseInt(duration);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) {
        return (`${minutes}:${String(seconds % 60).padStart(2, 0)}`)
    } else {
        return (`${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds % 60).padStart(2, 0)}`)
    }
}
