export function getScrollTop() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}

export function getScrollHeight() {
    return document.documentElement.scrollHeight || document.body.scrollHeight;
}

export function isSCrollToEnd() {
    return getScrollTop() === getScrollHeight() - window.innerHeight;
}