

class Character {
    constructor(name, health, strength,) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength and ${this.xp} XP points`;
    }
  }
  const glacius = new Character("Glacius", 130, 30);
  console.log(glacius.describe());
