import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

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
    if(tentativeGuess.value === answer) {
      setWon(true);
    }
    setGuesses([...guesses, tentativeGuess]);
  }

  return <>
  <GuessResults guesses={guesses} answer={answer} />
  <GuessInput handleAddGuess={handleAddGuess} answer={answer} disabled={won || lost} />
  {
    won && <WonBanner numGuesses={guesses.length} />
  }
  {
    lost && <LostBanner answer={answer} />
  }
  </>;
}

export default Game;
