// Game states
// "WIN" - Player robot has defeated all enemy robots
//      * fight all enemy robots


let playerMoney = 10;
let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;

// // You can also log multiple values at once like this 
// console.log(playerName, playerAttack, playerHealth);


// array indexing
// console.log(enemyNames.length);

// for(let i = 0; i < enemyNames.length; i++) {
//     console.log(enemyNames[i]);
//     console.log(i);
//     console.log(enemyNames[i] + " is at " + i + " index");
// }

let enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
let enemyHealth = 50;
let enemyAttack = 12;

    // alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");


// fight function expression
let fight = function(enemyName) {
    // repeat and excecute as long as the enemy robot is alive
    while(enemyHealth > 0) {

    let promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    console.log (promptFight);

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    
    //subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value of the 'enemyHealth' letiable
    enemyHealth = enemyHealth - playerAttack;
    
    // check enemy's health

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //Subtract the value of 'enemyAttack' from the value of 'playerhealth' and use that result to update the value of the 'playerHealth' letiable
    playerHealth = playerHealth - enemyAttack;
    
    //Log a resulting message to the console so that we know it worked   
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
// if player chooses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    let confirmSkip = window.confirm("Are your sure yuo'd like to quit?");

    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight.  Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
        fight();
    }
    window.alert(playerName + " has chosen to skip the fight!");
} else {
    window.alert("You need to choose a valid option. Try Again!");
}
    }
}

// for (let i = 0; i < enemyNames.length; i++) {
//     debugger;
//     // call fight function with enemy robot
//     // fight(enemyNames[i]);
// }

 for(let i = 0; i <enemyNames.length; i++) {
    let pickedEnemyName = enemyNames[i];
    enemyHealth = 50; 
    fight(enemyNames[i]);
 }


