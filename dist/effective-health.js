"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
// Warframe base stats (for example, Valkyr Prime has base 650 HP, 185 Shield, 1000 Armor at lvl 30)
const health = 750;
const shield = 185;
const armor = 1000;
// Health, shield and armor after all modifiers
const totalHealth = Math.floor(health);
const totalShield = Math.floor(shield);
const totalArmor = Math.floor(armor * (1 + 0.5 * (2.98 + 0.6 + 0.25 + 0.4) * 3)); // 50% base armor bonus from Warcry at 298% (base) + 60% (Molt Augmented) + 25% (Growing Power) + 40% (Sling Strength from Madurai) strength and 3 times bonus during Hysteria
console.log(`Modded health: ${totalHealth}`);
console.log(`Modded shield: ${totalShield}`);
console.log(`Modded armor ${totalArmor}`);
// All sources of DRs here; If no DR, leave blank
let damageReductions = [
    0.9, // 90% DR from Adaptation
    /*
    0.75, // 75% DR from Trinity's Blessing
    */
];
// Calculate Net DR after all sources of DRs
let damagePostDR = 1;
function calculateDMGAfterDR(DR) {
    damagePostDR = damagePostDR * (1 - DR);
}
damageReductions.forEach(e => calculateDMGAfterDR(e));
const percentageDR = 100 * (1 - (0, utils_1.roundTo)(damagePostDR, 4));
// Total effective hit points = effective health + effective shield + effective overguard (won't be calculated here because there are too many sources of overguard)
function totalEffectiveHitpoints(health, shield, armor) {
    console.log(`Net DR is ${percentageDR}%`);
    const effectiveHealth = Math.floor(health * (armor + 300) / 300 / damagePostDR);
    console.log(`Effective health is ${effectiveHealth}`);
    const effectiveShield = Math.floor(shield * 0.5);
    console.log(`Effective shield is ${effectiveShield}`);
    console.log(`Total effective hit points is ${effectiveHealth + effectiveShield}`);
}
totalEffectiveHitpoints(totalHealth, totalShield, totalArmor);
//# sourceMappingURL=effective-health.js.map