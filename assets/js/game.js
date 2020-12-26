let playerName = window.prompt("What is your robot's name?");
let playerHealth = 100;
let playerAttack = 10;
let playerMoney = 10;

let enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
let enemyHealth = 50;
let enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

// fight function (now with parameter for enemy's name)
let fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    let promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      let confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;

        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack letiable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack letiable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

// fight each enemy-robot by looping over them and fighting them one at a time
// function to start new game
// function to end the entire game


let startGame = function(){
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

for (let i = 0; i < enemyNames.length; i++) {
  // if player is still alive, keep fighting
  if (playerHealth > 0) {
    // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    let pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  }
  // if player isn't alive, stop the game
  else {
    window.alert('You have lost your robot in battle! Game Over!');
  }
}

let endGame = function() {
    window.alert("The game has now ended. Lets see how you did!");

    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert ("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You have lost your robot in battle.");
    }

    // ask the player if they want to play again
    let playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame;
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! come back soon!");
    }
};

// play again
    endGame();
};

// start game when page loads
startGame();
// debugger;


// wrap the game in startGame() function
//  *alerts the player of thier total stats
//  *asks player if they want to play again
//  *if yes, call startGame() function

// After a player skips or defeats an enemy 
// (and there are still more robots to fight)
//  * ask the player if they want to stop
//  * if no, continue as normal
//  * if yes, call the shop() function
// in the shop() function, ask the player if
// they want to 
//  "REFILL" Health, 
//  "UPGRADE" Attack,
// or "LEAVE" the shop
// if refill, subtract money points 
// from player and increase health
// if upgrade, subract money points 
// from player and increase attack power.
// if leave, alert goodbyre and exit the function.
// if any other invalid option, call shop() again


