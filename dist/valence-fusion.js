"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const bonus1 = 45.4; // current bonus
const bonus2 = 51.9; // new bonus
// final bonus is the greater of the two bonuses multiplied by 1.1, but capped at 60
const finalBonus = (0, utils_1.roundTo)(Math.min(1.1 * Math.max(bonus1, bonus2), 60), 1);
if (finalBonus === 60) {
    console.log(`Final bonus maxed out at 60`);
}
else {
    console.log(`Final bonus is ${finalBonus}`);
}
//# sourceMappingURL=valence-fusion.js.map