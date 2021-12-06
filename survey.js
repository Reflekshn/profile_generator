const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?", (name) => {
  rl.question("Whats an activity you like doing?", (activity) => {
    rl.question("What do you listen to while doing that?", (listenTo) => {
      rl.question("Which meal is your favourite? (eg: dinner, brunch, etc)", (favouriteMeal) => {
        rl.question("What's your favourite thing to eat for that meal?", (favouriteFood) => {
          rl.question("Which sport is your absolute favourite?", (favouriteSport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superpower) => {
              console.log(`${name} loves listening to ${listenTo} while ${activity}, devouring ${favouriteFood} for ${favouriteMeal}, prefers ${favouriteSport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});