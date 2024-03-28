const mortalKombatData = [
    {
        name: "Scorpion",
        hp: 100,
        specialMoves: [
            { name: "Spear", damage: 20, successRate: 80 },
            { name: "Teleport Punch", damage: 25, successRate: 70 },
            { name: "Hellfire", damage: 30, successRate: 75 }
        ]
    },
    {
        name: "Sub-Zero",
        hp: 110,
        specialMoves: [
            { name: "Ice Ball", damage: 18, successRate: 75 },
            { name: "Slide", damage: 15, successRate: 85 },
            { name: "Ice Clone", damage: 25, successRate: 60 }
        ]
    },
    {
        name: "Liu Kang",
        hp: 105,
        specialMoves: [
            { name: "Bicycle Kick", damage: 22, successRate: 90 },
            { name: "Flying Kick", damage: 20, successRate: 80 },
            { name: "Dragon Fire", damage: 28, successRate: 70 }
        ]
    },
    {
        name: "Sonya Blade",
        hp: 95,
        specialMoves: [
            { name: "Energy Rings", damage: 15, successRate: 85 },
            { name: "Leg Grab", damage: 18, successRate: 80 },
            { name: "Kiss of Death", damage: 35, successRate: 65 }
        ]
    },
    {
        name: "Johnny Cage",
        hp: 100,
        specialMoves: [
            { name: "Shadow Kick", damage: 22, successRate: 85 },
            { name: "Nut Punch", damage: 20, successRate: 75 },
            { name: "Green Energy Ball", damage: 30, successRate: 70 }
        ]
    },
    {
        name: "Raiden",
        hp: 115,
        specialMoves: [
            { name: "Lightning Bolt", damage: 20, successRate: 80 },
            { name: "Teleport", damage: 15, successRate: 90 },
            { name: "Shocker", damage: 25, successRate: 75 }
        ]
    },
];

module.exports = mortalKombatData;