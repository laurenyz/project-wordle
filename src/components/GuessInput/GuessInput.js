import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(guess);
    setGuess('');
  };

  return(
    <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required 
        pattern="\w{5,5}"
        minLength={5} //bugging out but left for reference
        maxLength={5} 
        title="5 letter word" //adds tooltip
        id="guess-input" value={guess} onChange={(e)=>setGuess(e.target.value.toUpperCase())} type="text" />
    </form>
  )
}

export default GuessInput;
