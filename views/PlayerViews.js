import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetGuess = class extends React.Component {
  render() {
    const {parent, playable, guess} = this.props;
    return (
      <div>
        {guess ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        {'Please make your guess'}
        <br />
        <br />
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('ZERO')}
        >Zero</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('ONE')}
        >One</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('TWO')}
        >Two</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('THREE')}
        >Three</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('FOUR')}
        >Four</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('FIVE')}
        >Five</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('SIX')}
        >Six</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('SEVEN')}
        >Seven</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('EIGHT')}
        >Eight</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('NINE')}
        >Nine</button>
        <button
          disabled={!playable}
          onClick={() => parent.playGuess('TEN')}
        >Ten</button>
      </div>
    );
  }
}


exports.GetHand = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Pick again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <br />
        {'Please choose how many fingers to raise.'}
        <button
          disabled={!playable}
          onClick={() => parent.playHand('ZERO')}
        >zero</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('ONE')}
        >One</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('TWO')}
        >Two</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('THREE')}
        >Three</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('FOUR')}
        >Four</button>
        <button
          disabled={!playable}
          onClick={() => parent.playHand('FIVE')}
        >Five</button>
      </div>
    );
  }
}


exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;