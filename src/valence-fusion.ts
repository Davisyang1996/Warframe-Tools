import { roundTo } from './utils';

const bonus1:number = 45.4; // current bonus
const bonus2:number = 51.9; // new bonus

// final bonus is the greater of the two bonuses multiplied by 1.1, but capped at 60
const finalBonus:number = roundTo(Math.min(1.1*Math.max(bonus1, bonus2), 60),1); 

if (finalBonus === 60) {
    console.log(`Final bonus maxed out at 60`);
}else {
    console.log(`Final bonus is ${finalBonus}`);
}