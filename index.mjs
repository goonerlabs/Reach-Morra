import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const player = (who) => ({
 getGuess: () => {
  const guess = (Math.floor(Math.random() * 9) + 1);
  console.log(`${who} guessed ${guess}`);
  return guess;
 },

 getHand: () => {
  const hand = (Math.floor(Math.random() * 4) + 1);
  console.log(`${who} played hand ${hand}`);
  return hand;
 },

 seeOutcome: (hands, guessAlice, guessBob) => {
  const outcome = hands == guessAlice ? 'Alice Wins!': hands == guessBob ? 'Bob wins!': 'It is a Draw'
  console.log(`${who} saw outcome ${outcome}`);
 },
})

await Promise.all([
 ctcAlice.p.Alice({
  // interact interface
  ...player('Alice'),
 }),
 ctcBob.p.Bob({
  // interact interface 
  ...player('Bob'),
 }),
]);