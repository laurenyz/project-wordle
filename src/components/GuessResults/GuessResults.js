import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function GuessResults({guesses, answer}) {

  const mappedGuesses = range(NUM_OF_GUESSES_ALLOWED).map((_, index) => {
    if(!guesses[index]) {
      return Array(5).fill({letter: '', status: ''})
    }
    return checkGuess(guesses[index].value, answer)
  })

  return (
    <div className="guess-results">
      {
        mappedGuesses.map((guessArray, index) =>{
          return <Guess key={index} guessArray={guessArray} />
        })
      }
    </div>
  )
}

export default GuessResults;
