import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleIncrement = () => {
    const newCount = count + 1;
    incrementCount(newCount);  
    sayHello(newCount);        
  };

  const incrementCount = (newCount) => {
    setCount(newCount);
  };

  const sayHello = (member) => {
    alert(`Hello! Member${member}`);
  };

  
  const handleDecrement = () => {
    setCount(count - 1);
  };

  
  const sayWelcome = (message) => {
    alert(message);
  };

  
  const handleClickEvent = () => {
    alert("I was clicked");
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    let result = 0;

    if (currency.toLowerCase() === 'euro') {
      result = parseFloat(amount) * 80; 
    }

    alert(`Converting to ${currency} Amount is ${result}`);
  };

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <button onClick={() => sayWelcome("welcome")}>Say welcome</button>
      <br />
      <button onClick={handleClickEvent}>Click on me</button>
      
      <h2 style={{ color: 'green' }}>Currency Convertor!</h2>

      <form onSubmit={handleSubmit}>
        <label>Amount: </label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <label>Currency: </label>
        <textarea
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
