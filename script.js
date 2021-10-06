console.log("JS is connected");


// Text Adventure Game
const enter = "Select 1 or 2 for your answer";
const gameOver = "Ope! Doc gave you Prazosin. No more nightmare adventures for you! Refresh page to go back to sleep.";
const start = `Click 'SLEEP' to start the game. (Fine... click "OK")`;
const q1 = `You are are in a bathroom, hugging a girl with long hair & grey skin. When you see her face she is...
1. Smiling at you, and you feel something sharp & cold on your back.
OR
2. Smiling at you, asking where the bathroom is.
${enter}`;
const gameOver1 = `Oh no! ${gameOver}`;
const q2 = `You manage to break away from the girl in the bathroom, there's chaos and you're running, when you get to the end....
1. The room around you is completely empty, & you hear a man saying "corpse... corpse... corpse.."
OR
2. A man is standing in front of you, with a mask over his face, with giant red eyes. Holding a human heart, & says... "I did what I had to do".
${enter}`;
const gameOver2 = `Close. The choice you chose was inspired by another one of my nightmares. ${gameOver}`;
const q3 = `You've woken up, and see a super attractive person, trying to seduce you... 
1. Realize you are in a prison cell and are very confused.
OR
2. Watch them turn into an evil creature that has you held captive.
${enter}`;
const gameOver3 = `So close. ${gameOver}`;
const q4 = `You look around desperately trying to find someone or something familiar & then...
1. Something makes you realize you're dreaming
OR
2. You see yourself drowning in a pool across the room from you...
${enter}`;
const gameOver4 = `You woke yourself & ${gameOver}`;
const q5 = `After you realized you are dreaming...
1. you look over at the dark entity, raise your hand without touching them, make them bow down & curl into a ball. Then wake up feeling empowered.
OR
2. You say "I'm dreaming. Watch, I can make you melt." & the entity has melted. Then you wake up confused.
${enter}`;
const gameOver5 = `So close. ${gameOver}`;
const win = `You have successfully gone through the nightmare! Congrats! Now you get Prazosin too.`;


// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the user's entry
let userInput = prompt(q1);



// 1st Conditional Statement
// NOTE: Prompt returns the value entered as a string. That is why double equals == is used instead of triple equals === here.
if (userInput == 1) {
    userInput = prompt(q2);
  
    // 2nd Conditional Statement
    if (userInput == 1){
      userInput = prompt(q3);
  
      // 3rd Conditional Statement
      if (userInput == 1) {
        userInput = prompt(q4);
  
        // 4th Conditional Statement
        if (userInput == 1){
          userInput = prompt(q5);
  
          // 5th Conditional Statement
          if (userInput == 1) {
              alert(win);
          } else {
              alert(gameOver5);
          }
  
        } else {
          alert(gameOver4);
        }
  
      } else {
        alert(gameOver3);
      }
  
    } else {
      alert(gameOver2);
    }
  
  } else {
    alert(gameOver1);
  }