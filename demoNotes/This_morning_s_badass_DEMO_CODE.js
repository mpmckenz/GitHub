// TODO: Build a game where have a hero and a monster
// TODO: I want to have them fight
// TODO: Oh, and that will mean they will have to have health
// TODO: They'll need to be able to affect each other's health

// const hero = new Creature({
//   name: 'The Real Burt – Burt Reynolds, back for revenge', 
//   health: 2000,
// })
// const monster = new Creature({
//   name: 'Glass Butterfly', 
//   health: 0.3,
//   chanceToCrit: 0.1,
// })

const hero = {
  name: 'Dryer Sheet EXTREEME',
  health: 100,
  chanceToMiss: 0.3,
  chanceToCrit: 0.9,
  fight: function (creature) {
    let message
    if (Math.random() < 0.3) {
      message = `${this.name} missed ${creature.name}.`
    } else {
      const dmg = Math.random() > 0.9 ? 20 : 10
      creature.health -= dmg
      message = `${creature.name} has been hit! It's now at ${creature.health} health.`
    }
    console.log(message)
    return message
  },
}

const monster = {
  name: 'Burt the Experimental Murder Bird',
  health: 50,
  chanceToMiss: 0.3,
  chanceToCrit: 0.9,
  fight: function (creature) {
    let message
    if (Math.random() < 0.3) {
      message = `${this.name} missed ${creature.name}.`
    } else {
      const dmg = Math.random() > 0.9 ? 20 : 10
      creature.health -= dmg
      message = `${creature.name} has been hit! It's now at ${creature.health} health.`
    }
    console.log(message)
    return message
  },
}

while (hero.health > 0 && monster.health > 0) {
  hero.fight(monster)
  monster.fight(hero)
  monster.fight(hero)
}

console.log(`${hero.name} is at ${hero.health} health and ${monster.name} is ${monster.health} health.`)
console.log(`${hero.health > 0 ? hero.name : monster.name} was the victor!`)