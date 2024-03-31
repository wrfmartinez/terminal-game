const prompt = require('prompt-sync')();
const mortalKombatData = require('./data');
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

`);

    player = prompt('')
    console.clear();
    if (player.toUpperCase() === 'A') {
        return mortalKombatData[0];
    } else if (player.toUpperCase() === 'B') {
        return mortalKombatData[1];
    } else if (player.toUpperCase() === 'C') {
        return mortalKombatData[2];
    } else if (player.toUpperCase() === 'D') {
        return mortalKombatData[3];
    } else if (player.toUpperCase() === 'E') {
        return mortalKombatData[4];
    } else if (player.toUpperCase() === 'F') {
        return mortalKombatData[5];
    } else { 
        playerSelection(); 
    }

    // Create a deep copy of the selected player object
    player = JSON.parse(JSON.stringify(mortalKombatData[playerIndex]));
    return player;
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
    `);
}

//DISPLAY Computer HP
const computerStats = (computer) => {
    console.log(`\x1b[37m${computer.name} HP: \x1b[0m\x1b[31m${computer.hp}\x1b[0m`);

}

//SELECTS RANDOM PLAYER
const randomPlayer = () => {
    let rand = Math.floor(Math.random() * 5);
    // Create a deep copy of the random player object
    return JSON.parse(JSON.stringify(mortalKombatData[rand]));
}

// Damage
const damage = (user, user2, move) => {
    console.clear();
    playerStats(player);
    computerStats(computer);

    console.log(`${user.name} used ${move.name}!`);
    console.log(`${user2.name} took ${move.damage} damage.`);
}

// MISS OR HIT
const missOrHit = (user, user2, move, turn) => {
    let rand = Math.floor(Math.random() * 100);
    let rand2 = Math.floor(Math.random() * 10);

    if (rand > user.specialMoves[0].successRate) {
        if (rand2 > 5) {
            return console.log(`${user.name} missed!`);
        } else {
            return console.log(`${user2.name} dodged`);
        }
    } else {
        if (turn) {
            user2.hp -= move.damage;
            if (user2.hp <= 0) {
                console.clear();
                console.log(`${user.name} wins!`);
                return;
            }
            damage(user, user2, move);
        } else {
            user.hp -= move.damage;
            if (user.hp <= 0) {
                console.clear();
                console.log(`${user2.name} wins!`);
                return;
            }
            damage(user, user2, move);
        }
    }
}

const chooseMove = (choice, player) => {
    if (choice === '1') {
        return player.specialMoves[0];
    }
    else if (choice === '2') {
        return player.specialMoves[1];
    }
    else {
        return player.specialMoves[2];
    }
}

const computerTurn = () => {
    let randMoveIndex;
    // Ensure a different move is chosen if used twice in a row
    do {
        randMoveIndex = Math.floor(Math.random() * 3);
    } while (randMoveIndex === computer.lastMoveIndex);
    computer.lastMoveIndex = randMoveIndex; 
    let randMove = chooseMove(String(randMoveIndex + 1), computer);
    console.log(`${computer.name} used ${randMove.name}`);
    console.log(`${player.name} took ${randMove.damage} damage.`);
    prompt('.. Pause .. Enter');
    missOrHit(computer, player, randMove, !turn);
}

const fight = (player) => {
    while (player.hp > 0 && computer.hp > 0) {
        if (turn) {
            let move = prompt('Choose your move (1) (2) (3)  ');
            move = chooseMove(move, player);
            missOrHit(player, computer, move, turn);
            turn = false;
        }
        else {
            computerTurn();
            turn = true;
        }
    }
}

init();