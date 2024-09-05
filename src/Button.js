import React from 'react';

function Button({ value, onClick }) {
  return <button id={value} onClick={onClick} className="button">{value}</button>;
}

export default Button;
