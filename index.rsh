'reach 0.1'

const [isHand, ZERO, ONE, TWO, THREE, FOUR, FIVE] = makeEnum(6);
const [isGuess, G0, G1, G2, G3, G4, G5, G6, G7, G8, G9, G10] = makeEnum(11);
const [isOutcome, DRAW, ALICE_WINS, BOB_WINS] = makeEnum(3);

const winner = (handAlice, handBob, guessAlice, guessBob) => {
  const result = guessAlice == guessBob ? 0:
                  guessAlice == (handAlice + handBob) ? 1:
                  guessBob == (handAlice + handBob) ? 2 :
                  /*guesses not equal & incorrect  */ 0;

  return result
}

assert(winner(ZERO, ZERO, G0, G0) == DRAW);
assert(winner(ZERO, FIVE, G0, G0) == DRAW);
assert(winner(ZERO, FIVE, G5, G0) == ALICE_WINS);
assert(winner(ZERO, FIVE, G0, G5) == BOB_WINS);

forall(UInt, handAlice => 
  forall(UInt, handBob => 
    forall(UInt, guessAlice => 
      forall(UInt, guessBob => 
        assert(isOutcome(winner(handAlice, handBob, guessAlice, guessBob)))))));

forall(UInt, handAlice => 
  forall(UInt, handBob => 
    forall(UInt, guess => 
      assert(winner(handAlice, handBob, guess, guess) == DRAW))));


const player = {
  ...hasRandom,
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
  const _handAlice = interact.getHand();
  const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
  const commitAlice = declassify(_commitAlice);
 });
 Alice.publish(guessAlice, wager, commitAlice).pay(wager);
 commit();

 unknowable(Bob, Alice(_handAlice, _saltAlice));

 Bob.only(() => {
  interact.acceptWager(wager)
  const guessBob = declassify(interact.getGuess());
  const handBob = declassify(interact.getHand());
 });
  Bob.publish(guessBob, handBob).pay(wager);
  commit();

  Alice.only(() => {
    const saltAlice = declassify(_saltAlice);
    const handAlice = declassify(_handAlice);
  })
  Alice.publish(handAlice, saltAlice);
  checkCommitment(commitAlice, saltAlice, handAlice);

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