import React from 'react';

function Guess({guessArray}) {

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
