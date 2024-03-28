const prompt = require('prompt-sync')();
const mortalKombatData = require('./data')
console.clear();

let player;
let againstComputer = false;
let computer;
let secondPlayer;


const playerSelection = () => {
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
    else playerSelection();
    
}
const init = () => {
    console.clear();
    player = playerSelection();
    playerStats(player);
    computer = randomPlayer();
    computerStats(computer);
    missOrHit(computer, player);
    missOrHit(player, computer);
    missOrHit(computer, player);
}

/// CHAT GPT USED CONSOLE COLORS ANSI 
// STATS

const playerStats = (player) => {

    console.log("\x1b[1mPlayer:\x1b[32m", player.name, "\x1b[0m");
console.log("\x1b[1mHP:\x1b[33m", player.hp, "\x1b[0m"); 
console.log("\x1b[1mSpecial Moves:\x1b[0m");

player.specialMoves.forEach((move, index) => {
    const moveNumber = index + 1;
    console.log(`${moveNumber}. \x1b[32m${move.name}\x1b[0m, Damage: \x1b[33m${move.damage}\x1b[0m, Success Rate: \x1b[33m${move.successRate}%\x1b[0m`);
});


// CHAT GPT FOR CONSOLE COLORS
   
    
    console.log(`######################################
    
    VERSUS:
    `)

}

const computerStats = (computer) => {
    console.log(`\x1b[37m${computer.name} HP: \x1b[0m\x1b[31m${computer.hp}\x1b[0m`);

}

const randomPlayer = () => { 
    let rand = Math.floor(Math.random() * 5);
    return mortalKombatData[rand]
}

const missOrHit = (user, user2) => { 
    let rand = 0;
    let rand2 = 0;
    rand = Math.floor(Math.random() * 100)
    if (rand > user.specialMoves[0].successRate) {
         rand2 = Math.floor(Math.random() * 10)
        if (rand2 > 5) {
            return console.log(`${user.name} missed!`)
        }
        else {
            return console.log(`${user.name} dodged`)
        }

    }
    else { 
        console.log(rand)
        console.log(user.specialMoves[0].successRate)
        console.log(`${user.name} hit ${user2.name}`);
    }
}


init();