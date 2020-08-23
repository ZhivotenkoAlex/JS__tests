class Hero {
    constructor({ name = "hero", xp = 0 } = {}) {
        this.name = name;
        this.xp = xp;

    }

    gainXp(amount) {
        this.xp += amount;
    }
}

class Warrior extends Hero {
    constructor(name, xp, weapon) {
        super(name, xp);
        this.weapon = weapon;
    }

    gainXp() {}
}
// class Mage {
//     constructor() {

//         this.spells = [];
//     }

//     gainXp() {}
// }
const man = new Warrior("Man", 1000, "меч");
console.log(man);