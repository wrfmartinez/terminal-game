const prompt = require('prompt-sync')();
const mortalKombatData = require('./data')
console.clear();

let player;
let computer;
let turn = true;


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
    fight(player);
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

//DISPLAY Computer HP
const computerStats = (computer) => {
    console.log(`\x1b[37m${computer.name} HP: \x1b[0m\x1b[31m${computer.hp}\x1b[0m`);

}

//SELECTS RANDOM PLAYER
const randomPlayer = () => { 
    let rand = Math.floor(Math.random() * 5);
    return mortalKombatData[rand]
}


// MISS OR HIT.. WORKS
const missOrHit = (user, user2, move, turn) => { 
    let rand = 0;
    let rand2 = 0;
    rand = Math.floor(Math.random() * 100)
    if (rand > user.specialMoves[0].successRate) {
         rand2 = Math.floor(Math.random() * 10)
        if (rand2 > 5) {
            return console.log(`${user.name} missed!`)
        }
        else {
            return console.log(`${user2.name} dodged`)
        }

    }
    else { 
        if (turn) {
            player.hp -= move.damage;
            damage(user, user2, move);
        }
        else {
            computer.hp -= move.damage;
            damage(user, user2, move);
        }

    }
}

// WORKS
const chooseMove = (choice, player) => { 
    if (choice === '1') {
        return player.specialMoves[0]
    }
    else if (choice === '2') {
        return player.specialMoves[1]
    }
    else { 
        return player.specialMoves[2]
    }
}
/// SOMETHING DOESNT WORK
const fight = (player) => { 
    if (turn) {
        let move = prompt('Choose your move (1) (2) (3)  ');
        move = chooseMove(move, player);
        missOrHit(player, computer, move, turn);
        turn = false;
    }
    else
        computerTurn()
        turn = true;
        fight();
}

const computerTurn = () => { 
    let randMove = Math.floor(Math.random() * 3)
    randMove = chooseMove(randMove, computer);
    missOrHit(computer, player, randMove, !turn);

}

// Damage // Works
const damage = (user,user2,move)=>{ 
        console.clear();
        playerStats(player);
        computerStats(computer);
        console.log(`${user.name} hit ${user2.name} with ${move.name}. 
        ${move.damage} damage done`);
}


init();