/**
 * 
 * @param  {...any} parans Printer arguments info in console
 */
const info = (...parans) => {
    console.log(...parans);
};

/**
 * 
 * @param  {...any} parans Printer arguments error in console
 */
const error = (...parans) => {
    console.log(...parans);
};

module.exports = {
    info,
    error,
}