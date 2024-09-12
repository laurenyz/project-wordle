import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({guesses, answer}) {
  
  const emptyRowNum = NUM_OF_GUESSES_ALLOWED - guesses.length;
  const emptyRows = range(emptyRowNum);
  return (
    <div className="guess-results">
      {
        guesses.map(({value, id}) =>{
          return <Guess key={id} value={value} answer={answer} />
        })
      }
      {
        emptyRows.map((el) => {
          return <Guess key={el} />
        })
      }
    </div>
  )
}

export default GuessResults;
