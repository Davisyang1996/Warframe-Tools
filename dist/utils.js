"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roundTo = roundTo;
// rounding function since Warframe math is rounded to 1 decimal place
function roundTo(num, places) {
    const factor = 10 ** places;
    return Math.round(num * factor) / factor;
}
//# sourceMappingURL=utils.js.map