import React from 'react';

function GuessResults({guesses}) {
  return (
    <div class="guess-results">
      {
        guesses.map(({value, id}) =>{
          return <p key={id} className="guess">{value}</p>
        })
      }
    </div>
  )
}

export default GuessResults;
