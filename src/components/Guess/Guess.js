import React from 'react';
import { checkGuess } from '../../game-helpers';

const defaultArray = Array(5).fill({
  letter: '',
  status: ''
})

function Guess({value = '', answer = ''}) {
  let guessArray
  if(!value) {
    guessArray = defaultArray
  } else {
    guessArray = checkGuess(value, answer)
  }

  return (
    <p className="guess">
      {
        guessArray.map(({letter, status}, index) => {
          return <span key={index} className={`cell ${status}`}>{letter}</span>
        })
      }
  </p>);
}

export default Guess;
