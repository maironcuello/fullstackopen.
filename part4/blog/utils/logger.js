/**
 * 
 * @param  {...any} parans Printer arguments info in console
 */
const info = (...parans) => {
    if (process.env.NODE_ENV !== 'test') {
        console.log(...parans);
    }
};

/**
 * 
 * @param  {...any} parans Printer arguments error in console
 */
const error = (...parans) => {

    if (process.env.NODE_ENV !== 'test') {
        console.log(...parans);
    }
};

module.exports = {
    info,
    error,
}