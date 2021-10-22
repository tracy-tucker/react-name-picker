import React, { useContext } from 'react';
import { nameData } from './Names';
import './style.css';

export default function App() {
  const randomizer = () => {
    console.log('testing');
  };
console.log('hello?')
  return (
    <div>
      <h1>XMAS STOCKING RANDOMIZER</h1>
      <button onClick={randomizer()}>BRING THE WRATH</button>

      <ul>
        {nameData.map((name) => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ul>
    </div>
  );
}
