/**
 * @param   {number} number
 * @returns {string}
 */
export default function (number) {
    return number ? parseInt(number, 10).toLocaleString('de-DE') : '0';
}
