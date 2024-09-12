import React from 'react';

function GuessInput({handleAddGuess}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleAddGuess({
      value: tentativeGuess,
      id: crypto.randomUUID()
    })
    setTentativeGuess('');
  };

  return(
    <form className="guess-input-wrapper" onSubmit={handleOnSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required 
         pattern="[a-zA-Z]{5}"
        minLength={5} //bugging out but left for reference
        maxLength={5} 
        title="5 letter word" //adds tooltip
        id="guess-input" value={tentativeGuess} onChange={(e)=>setTentativeGuess(e.target.value.toUpperCase())} type="text" />
    </form>
  )
}

export default GuessInput;
