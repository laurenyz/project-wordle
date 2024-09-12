import React from 'react';
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function GuessResults({guesses}) {
  
  const emptyRowNum = NUM_OF_GUESSES_ALLOWED - guesses.length;
  const emptyRows = range(emptyRowNum);
  return (
    <div className="guess-results">
      {
        guesses.map(({value, id}) =>{
          console.log({guesses})
          return <Guess key={id} value={value} />
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
