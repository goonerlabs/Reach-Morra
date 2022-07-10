'reach 0.1'

const player = {
 getHand: Fun([], UInt),
 getGuess: Fun([], UInt),
 seeOutcome: Fun([UInt], Null)
};

export const main = Reach.App(() => {
 const Alice = Participant('Alice', {
  ...player,
  wager: UInt,
 });

 const Bob = Participant('Bob', {
  ...player,
  acceptWager: Fun([UInt], Null),
 });
 init();

 Alice.only(() => {
  const wager = declassify(interact.wager);
  const guessAlice = declassify(interact.getGuess());
 });
 Alice.publish(guessAlice, wager).pay(wager);
 commit();

 Bob.only(() => {
  const guessBob = declassify(interact.getGuess());
  interact.acceptWager(wager)
 });
  Bob.publish(guessBob).pay(wager);
  commit();

  Alice.only(() => {
    const handAlice = declassify(interact.getHand());
  })
  Alice.publish(handAlice);
  commit();
  Bob.only(() => {
    const handBob = declassify(interact.getHand());
  })
  Bob.publish(handBob);

  const outcome = guessAlice == guessBob ? 0:
                  guessAlice == (handAlice + handBob) ? 1:
                  guessBob == (handAlice + handBob) ? 2 :
                  /*guesses not equal & incorrect  */ 0;

  const [forAlice, forBob] = outcome == 1 ? [2, 0] :
        outcome == 2 ?                      [0, 2] :
        /*tie or no one gets it */          [1, 1];
  
  transfer(forAlice * wager).to(Alice);
  transfer(forBob * wager).to(Bob);
  commit();
  
  each([Alice, Bob], () => { 
   interact.seeOutcome(outcome);
  });
})