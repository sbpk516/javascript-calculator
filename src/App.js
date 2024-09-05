import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import Display from './Display';

function App() {
  const [input, setInput] = useState('0');
  const [lastOperator, setLastOperator] = useState('');
  const [result, setResult] = useState(null);

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('0');
      setResult(null);
    } else if (value === '=') {
      const calculation = eval(input); // Simple eval for demo, not recommended for production!
      setResult(calculation);
      setInput(calculation.toString());
    } else {
      setInput((prev) => (prev === '0' ? value : prev + value));
    }
  };

  return (
    <div className="app">
      <Display value={result || input} />
      <div className="buttons">
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '.', '/', '='].map((item) => (
          <Button key={item} value={item} onClick={() => handleButtonClick(item)} />
        ))}
      </div>
    </div>
  );
}

export default App;
