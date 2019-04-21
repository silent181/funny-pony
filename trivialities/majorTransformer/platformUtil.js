const os = require('os');
const platform = os.platform();
const PLATFORM = {
    WIN:"win32",
    MAC:"darwin"
}

function getLines(text) {
    if (platform === PLATFORM.MAC) {
        return text.split('\n');
    } else if (platform === PLATFORM.WIN) {
        return text.split('\r\n');
    } else {
        throw new Error('your platform does not support this util');
    }
}

function getResultText(lines) {
    if (platform === PLATFORM.MAC) {
        return lines.join('\n');
    } else if (platform === PLATFORM.WIN) {
        return lines.join('\r\n');
    }
}

module.exports = {
    getLines,
    getResultText
}