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
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...player,
    wager: UInt,
    deadline: UInt,
 });

 const Bob = Participant('Bob', {
  ...player,
  acceptWager: Fun([UInt], Null),
 });
 init();

 const informTimeout = () => {
  each([Alice, Bob], () => {
    interact.informTimeout();
  });
 }

 Alice.only(() => {
  const wager = declassify(interact.wager);
  const deadline = declassify(interact.deadline);
 });
 Alice.publish(wager, deadline).pay(wager);
 commit();

  Bob.only(() => {
    interact.acceptWager(wager)
  });
  Bob.pay(wager).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

  var outcome = DRAW;
  invariant(balance() == 2 * wager && isOutcome(outcome));
  while (outcome == DRAW) {
    commit();
    Alice.only(() => {
      const _guessAlice = interact.getGuess();
      const _handAlice = interact.getHand();
      const [_commitHandAlice, _saltHandAlice] = makeCommitment(interact, _handAlice);
      const [_commitGuessAlice, _saltGuessAlice] = makeCommitment(interact, _guessAlice);

      const commitHandAlice = declassify(_commitHandAlice);
      const commitGuessAlice = declassify(_commitGuessAlice);
    });
    Alice.publish(commitHandAlice, commitGuessAlice).timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    commit();

    unknowable(Bob, Alice(_handAlice, _saltHandAlice, _guessAlice, _saltGuessAlice));

    Bob.only(() => {
      const guessBob = declassify(interact.getGuess());
      const handBob = declassify(interact.getHand());
    });
    Bob.publish(guessBob, handBob).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();

    Alice.only(() => {
      const saltHandAlice = declassify(_saltHandAlice);
      const handAlice = declassify(_handAlice);
      const guessAlice = declassify(_guessAlice);
      const saltGuessAlice = declassify(_saltGuessAlice);
    })
    Alice.publish(handAlice, saltHandAlice, guessAlice, saltGuessAlice).timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    checkCommitment(commitHandAlice, saltHandAlice, handAlice);
    checkCommitment(commitGuessAlice, saltGuessAlice, guessAlice);

    outcome = winner(handAlice, handBob, guessAlice, guessBob);
    continue;
  }

  const [forAlice, forBob] = outcome == 1 ? [2, 0] : [0, 2];
  
  transfer(forAlice * wager).to(Alice);
  transfer(forBob * wager).to(Bob);
  commit();
  
  each([Alice, Bob], () => { 
   interact.seeOutcome(outcome);
  });
})