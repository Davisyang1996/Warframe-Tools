import { roundTo } from './utils';

// Warframe base stats (for example, Valkyr Prime has base 750 HP, 185 Shield, 1000 Armor at lvl 30)
const health: number = 750;
const shield: number = 185;
const armor:number = 1000;

// Health, shield and armor after all modifiers
const totalHealth:number = Math.floor(health);
const totalShield:number = Math.floor(shield);
const totalArmor: number = Math.floor(armor * (1 + 0.5 * (2.98 + 0.6 + 0.25 + 0.4) * 3)); // 50% base armor bonus from Warcry at 298% (base) + 60% (Molt Augmented) + 25% (Growing Power) + 40% (Sling Strength from Madurai) strength and 3 times bonus during Hysteria
console.log(`Modded health: ${totalHealth}`);
console.log(`Modded shield: ${totalShield}`);
console.log(`Modded armor ${totalArmor}`);

// All sources of DRs here; If no DR, leave blank
let damageReductions: number[] = [
    0.9, // 90% DR from Adaptation
    /* 
    0.75, // 75% DR from Trinity's Blessing
    */
];

// Calculate Net DR after all sources of DRs
let damagePostDR: number = 1;
function calculateDMGAfterDR(DR: number) {
    damagePostDR = damagePostDR * (1 - DR)
}
damageReductions.forEach(e => calculateDMGAfterDR(e));
const percentageDR: number = 100 * (1 - roundTo(damagePostDR, 4));

// Total effective hit points = effective health + effective shield + effective overguard (won't be calculated here because there are too many sources of overguard)
function totalEffectiveHitpoints(health: number, shield: number, armor: number) {
    console.log(`Net DR is ${percentageDR}%`);
    const effectiveHealth: number = Math.floor(health * (armor + 300) / 300 / damagePostDR);
    console.log(`Effective health is ${effectiveHealth}`);
    const effectiveShield: number = Math.floor(shield * 0.5);
    console.log(`Effective shield is ${effectiveShield}`);
    console.log(`Total effective hit points is ${effectiveHealth + effectiveShield}`);
}

totalEffectiveHitpoints(totalHealth, totalShield, totalArmor);

