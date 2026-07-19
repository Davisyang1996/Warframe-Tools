"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseCriticalChance = 0.25; // Base critical chance of 25% of Dual Ichor
const baseStatusChance = 0.49; // Base status chance of 49% of Dual Ichor
const initialCombo = 30 + 120; // 30 from Corrupt Charge + 120 from Galvanized Reflex
const meleeCombo = 12; // Max melee combo caps at 12 apart from Venka Prime
function calculateHeavyComboTier(initialCombo) {
    switch (true) {
        case (initialCombo >= 220):
            return 12;
        case (initialCombo >= 200):
            return 11;
        case (initialCombo >= 180):
            return 10;
        case (initialCombo >= 160):
            return 9;
        case (initialCombo >= 140):
            return 8;
        case (initialCombo >= 120):
            return 7;
        case (initialCombo >= 100):
            return 6;
        case (initialCombo >= 80):
            return 5;
        case (initialCombo >= 60):
            return 4;
        case (initialCombo >= 40):
            return 3;
        case (initialCombo >= 20):
            return 2;
        default:
            return 1;
    }
}
// Modifiers for critical chance
const bloodRushBonus = 0.4 * (meleeCombo - 1); // Blood Rush bonus based on max melee combo 
const bloodRushHeavyBonus = 0.4 * (calculateHeavyComboTier(initialCombo) - 1); // Blood Rush bonus based on heavy combo tier
const galvanizedSteelBonus = 1.1; // crit chance bonus from galvanized steel
const sacrificialSteelBonus = 2.2; // crit chance bonus from sacrificial steel 
const rivenCritBonus = 1.93; // crit chance bonus from riven mod
// Modifiers for status chance
const galvanizedElementalistBonus = 0.3 * 4; // status chance bonus from galvanized elementalist mod at 4 stacks
const weepingWoundsBonus = 0.4 * (meleeCombo - 1); // status chance bonus from weeping wounds mod based on max melee combo
const rivenStatusBonus = 0; // status chance bonus from riven mod
const numberOf6060Mods = 1; // number of 60/60 mods equipped, each giving 0.6 status chance bonus
const bonusFrom6060Mods = 0.6 * numberOf6060Mods; // total status chance bonus from 60/60 mods
const utils_1 = require("./utils");
const finalCriticalChanceGalSteel = (0, utils_1.roundTo)(100 * baseCriticalChance * (1 + galvanizedSteelBonus + rivenCritBonus + bloodRushBonus), 1); // final critical chance calculation with galvanized steel
const finalCriticalChanceSacSteel = (0, utils_1.roundTo)(100 * baseCriticalChance * (1 + sacrificialSteelBonus + rivenCritBonus + bloodRushBonus), 1); // final critical chance calculation with sacrificial steel
const finalHeavyCriticalChanceGalSteel = (0, utils_1.roundTo)(100 * baseCriticalChance * (1 + galvanizedSteelBonus * 2 + rivenCritBonus + bloodRushHeavyBonus), 1); // final heavy attack critical chance calculation with double Galvanized Steel mod bonus and blood rush bonus based on heavy combo tier
const finalHeavyCriticalChanceSacSteel = (0, utils_1.roundTo)(100 * baseCriticalChance * (1 + sacrificialSteelBonus * 2 + rivenCritBonus + bloodRushHeavyBonus), 1); // final heavy attack critical chance calculation with double Sacrificial Steel mod bonus and blood rush bonus based on heavy combo tier
const finalStatusChance = (0, utils_1.roundTo)(100 * baseStatusChance * (1 + galvanizedElementalistBonus + weepingWoundsBonus + rivenStatusBonus + bonusFrom6060Mods), 1); // final status chance calculation
console.log(`Final critical chance with Galvanized Steel: ${finalCriticalChanceGalSteel}%`);
console.log(`Final critical chance with Sacrificial Steel: ${finalCriticalChanceSacSteel}%`);
console.log(`Final heavy attack critical chance with Galvanized Steel: ${finalHeavyCriticalChanceGalSteel}%`);
console.log(`Final heavy attack critical chance with Sacrificial Steel: ${finalHeavyCriticalChanceSacSteel}%`);
console.log(`Final status chance: ${finalStatusChance}%`);
//# sourceMappingURL=melee-crit-status-chance.js.map