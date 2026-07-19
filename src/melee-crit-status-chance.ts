// Base critical and status chance values of the melee weapon (Dual Ichor for example has a base crit chance of 0.25 and a base status chance of 0.49) - replace as needed
const baseCriticalChance:number = 0.25;
const baseStatusChance:number = 0.49;

// Max melee combo caps at 12 apart from Venka Prime
const meleeCombo: number = 12;
// Inital combo count (only relevent for Heavy Attack builds)
// 30 from Corrupt Charge + 120 from Galvanized Reflex
const initialCombo:number = 30 + 120;

// Calculate the heavy combo tier based on the initial combo count
function calculateHeavyComboTier(initialCombo:number):number {
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
const bloodRushBonus:number = 0.4 * (meleeCombo -1); // Blood Rush bonus based on max melee combo 
const bloodRushHeavyBonus:number = 0.4 * (calculateHeavyComboTier(initialCombo) -1); // Blood Rush bonus based on heavy combo tier
const galvanizedSteelBonus:number = 1.1; // crit chance bonus from galvanized steel
const sacrificialSteelBonus:number = 2.2; // crit chance bonus from sacrificial steel 
const rivenCritBonus:number = 1.93; // crit chance bonus from riven mod
const numberOfGladiatorMods:number = 1; // number of mods equipped from the Gladiator set, each giving 0.1 crit chance bonus
const gladiatorBonus:number = numberOfGladiatorMods * 0.1; // total crit chance bonus from Gladiator mods

// Modifiers for status chance
const galvanizedElementalistBonus:number = 0.3 * 4; // status chance bonus from galvanized elementalist mod at 4 stacks
const weepingWoundsBonus:number = 0.4 * (meleeCombo -1); // status chance bonus from weeping wounds mod based on max melee combo
const rivenStatusBonus:number = 0; // status chance bonus from riven mod
const numberOf6060Mods:number = 1; // number of 60/60 mods equipped, each giving 0.6 status chance bonus
const bonusFrom6060Mods:number = 0.6 * numberOf6060Mods; // total status chance bonus from 60/60 mods

// Import the rounding function from utils.ts
import { roundTo } from './utils'; 

// Final critical chance of light attacks, i.e. with Galvalized Steel or Sacrificial Steel equipped, Blood Rush bonus at 12x Combo and Riven bonus applied, rounded to 1 decimal place
const finalCriticalChanceGalSteel:number = roundTo(100*baseCriticalChance * (1 + galvanizedSteelBonus + rivenCritBonus + bloodRushBonus + gladiatorBonus), 1); 
const finalCriticalChanceSacSteel:number = roundTo(100*baseCriticalChance * (1 + sacrificialSteelBonus + rivenCritBonus + bloodRushBonus + gladiatorBonus), 1); 

// Final critical chance of heavy attacks, i.e. with Galvalized Steel or Sacrificial Steel equipped, Blood Rush bonus based on initial combo count and Riven bonus applied, rounded to 1 decimal place
const finalHeavyCriticalChanceGalSteel:number = roundTo(100*baseCriticalChance * (1 + galvanizedSteelBonus*2 + rivenCritBonus + bloodRushHeavyBonus + gladiatorBonus), 1);  
const finalHeavyCriticalChanceSacSteel:number = roundTo(100*baseCriticalChance * (1 + sacrificialSteelBonus*2 + rivenCritBonus + bloodRushHeavyBonus + gladiatorBonus), 1); 

// Final status chance with all modifiers applied rounded to 1 decimal place
const finalStatusChance:number = roundTo(100*baseStatusChance * (1 + galvanizedElementalistBonus + weepingWoundsBonus + rivenStatusBonus + bonusFrom6060Mods), 1);

console.log(`Final critical chance with Galvanized Steel: ${finalCriticalChanceGalSteel}%`);
console.log(`Final critical chance with Sacrificial Steel: ${finalCriticalChanceSacSteel}%`);
console.log(`Final heavy attack critical chance with Galvanized Steel: ${finalHeavyCriticalChanceGalSteel}%`);
console.log(`Final heavy attack critical chance with Sacrificial Steel: ${finalHeavyCriticalChanceSacSteel}%`);
console.log(`Final status chance: ${finalStatusChance}%`);