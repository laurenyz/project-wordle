import React from 'react';

const defaultArray = Array(5).fill('')

function Guess({value = ''}) {
  let guessArray
  if(!value) {
    guessArray = defaultArray
  } else {
    guessArray = value.split('')
  }
  return (
    <p className="guess">
      {
        guessArray.map((letter, index) => {
          return <span key={index} className="cell">{letter}</span>
        })
      }
  </p>);
}

export default Guess;
