const prompt = require('prompt-sync')();
const mortalKombatData = require('./data')
console.clear();

let player;
const intro = (username) => {
    console.log(`

Welcome to Mortal Kombat !

    Choose Your Fighter:
    A - Scorpion
    B - Sub-Zero
    C - Liu Kang
    D - Sonya Blade
    E - Johnny Cage
    F - Raiden

`)
    
    player = prompt('')
    console.clear();
    if (player.toUpperCase() === 'A') {
        return mortalKombatData[0]
    }
    else if (player.toUpperCase() === 'B') {
        return mortalKombatData[1]
    }
    else if (player.toUpperCase() === 'C') {
        return mortalKombatData[2]
    }
    else if (player.toUpperCase() === 'D') {
        return mortalKombatData[3]
    }
    else if (player.toUpperCase() === 'E') {
        return mortalKombatData[4]
    }
    else if (player.toUpperCase() === 'F') {
        return mortalKombatData[5]
    }
    else intro();
    
}
const init = () => {
    player = intro();
    console.log(`You selected ${player.name}`)
    console.log(player)
}



init();