import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();

const OUTCOME = ["It's a Draw!", "Alice wins!", "Bob Wins!"]
const startingBalance = stdlib.parseCurrency(100);

const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const fmt = (amt) => stdlib.formatCurrency(amt, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const player = (who) => ({
 ...stdlib.hasRandom,
 getGuess: () => {
  const guess = (Math.floor(Math.random() * 10));
  console.log(`${who} guessed ${guess}`);
  return guess;
 },

 getHand: () => {
  const hand = (Math.floor(Math.random() * 5));
  console.log(`${who} played hand ${hand}`);
  return hand;
 },

 seeOutcome: (outcome) => {
  console.log(`${who} saw outcome ${OUTCOME[outcome]}`);
 },
 informTimeout: () => {
  console.log(`${who} observed a timeout.`);
 } 
})

await Promise.all([
 ctcAlice.p.Alice({
  // interact interface
  ...player('Alice'),
  wager: stdlib.parseCurrency(10),
  deadline: 10,
 }),
 ctcBob.p.Bob({
  // interact interface 
  ...player('Bob'),
  acceptWager: (amt) => {
   console.log(`Bob accepts wager of ${fmt(amt)}`)
  }
 }),
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

console.log(`Alice moved from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob moved from ${beforeBob} to ${afterBob}.`);
