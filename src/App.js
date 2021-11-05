import React, { useContext } from 'react';
import { nameData } from './Names';
import './style.css';

export default function App() {
  const randomizer = () => {
    const nameArr = nameData.map((name) => name.name);
    const n = nameArr[Math.floor(Math.random() * nameArr.length)];
    console.log(n);
    document.getElementById('name1').innerHTML = n;
    const index = nameArr.indexOf(n);
    // console.log(index);
    nameData.splice(index, 1);

    console.log('NAME', nameArr);

    // if (n == nameData.name) {
    //   //
    // }
  };

  return (
    <div>
      <h1>XMAS STOCKING RANDOMIZER</h1>

      <div>
        <button onClick={() => randomizer()}>
          <h1>CHOOSE NAMES:</h1>
        </button>
      </div>
      <div>
        <h3 id="name1"></h3>
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
// Need to draw first name, then second name
// Need to "pair up" each random drawing

// Cannot draw name for respective couple
