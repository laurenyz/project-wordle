import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [won, setWon] = React.useState(false);

  const lost = !won && guesses.length === NUM_OF_GUESSES_ALLOWED

  const handleAddGuess = (tentativeGuess) => {
    if(guesses.find(g => g.value === tentativeGuess.value)) {
      alert('You already guessed that word!');
      return
    }
    setGuesses([...guesses, tentativeGuess]);
  }

  const handleSetWon = (bool) => {
    setWon(bool);
  }

  return <>
  <GuessResults guesses={guesses} answer={answer} />
  {
    !(won || lost) &&
    <GuessInput handleAddGuess={handleAddGuess} handleSetWon={handleSetWon} answer={answer} />
  }
  {
    won &&
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guesses.length} {guesses.length>1 ? "guesses" : "guess"}</strong>.
      </p>
    </div>
  }
  {
    lost &&
    <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>
  }
  </>;
}

export default Game;
