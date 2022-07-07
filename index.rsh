'reach 0.1'

const player = {
 getHand: Fun([], UInt),
 getGuess: Fun([], UInt),
 seeOutcome: Fun([UInt, UInt, UInt], Null)
};

export const main = Reach.App(() => {
 const Alice = Participant('Alice', {
  ...player
 });

 const Bob = Participant('Bob', {
  ...player
 });
 init();

 Alice.only(() => {
  const guessAlice = declassify(interact.getGuess());
  const handAlice = declassify(interact.getHand());
 });
 Alice.publish(guessAlice, handAlice);
 commit();

 Bob.only(() => {
  const guessBob = declassify(interact.getGuess());
  const handBob = declassify(interact.getHand());
 });
  Bob.publish(guessBob, handBob);
  const hands = handAlice + handBob
  commit();
  each([Alice, Bob], () => {
   interact.seeOutcome(hands, guessAlice, guessBob);
  });
})