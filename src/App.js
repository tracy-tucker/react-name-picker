import React, { useContext } from 'react';
import { nameData } from './Names';
import './style.css';

export default function App() {
  const randomizer = () => {
    const nameArr = nameData.map((name) => name.name);
    console.log(nameArr);
    if (nameData.length % 2 != 0) {
      alert('You need an even number of names to play');
    } else {
      const arr1 = nameData.slice();
      const arr2 = nameData.slice();
    }
    const ranName = nameArr[Math.floor(Math.random() * nameData.length)];
    document.getElementById('name1').innerHTML = ranName;
    console.log(nameArr);
  };

  console.log('hello?');

  return (
    <div>
      <h1>XMAS STOCKING RANDOMIZER</h1>
      <button onClick={() => randomizer()}>BRING THE WRATH</button>

      <div>
        <h1>CHOSEN ONE:</h1>
        <h3 id="name1"></h3>
      </div>
      <div>
        <h1>CHOSEN TWO:</h1>
        <h3 id="name2"></h3>
      </div>

      <ul>
        {nameData.map((name) => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Once name is drawn, cannot be redrawn
// Cannot draw name for respective couple
// Need to draw first name, then second name
// Need to "pair up" each random drawing
