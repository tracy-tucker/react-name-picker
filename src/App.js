import React, { useContext } from 'react';
import { nameData } from './Names';
import './style.css';

export default function App() {
  const randomizer = () => {
    const nameArr = nameData.map((name) => name.name);
    if (nameData.length % 2 != 0) {
      alert('You need an even number of names to play');
    } else {
      ranName = [];
      (i = nameData.length), (j = 0);
      while (i--) {
        j = Math.floor(Math.random() * (i + 1));
        ranName.push(nameData[j]);
        nameData.splice(j, 1);
      }
      ranName.next().value;
      // const arr1 = nameData.slice();
      // const randName1 = arr1[Math.floor(Math.random() * arr1.length)];
      // const randName2 = arr1[Math.floor(Math.random() * arr1.length)];

      // console.log(randName1);
      document.getElementById('name1').innerHTML = ranName;
      document.getElementById('name2').innerHTML = ranName;
    }
  };

  return (
    <div>
      <h1>XMAS STOCKING RANDOMIZER</h1>
      {/* <button onClick={() => randomizer()}>BRING THE WRATH</button> */}

      <div>
        <button onClick={() => randomizer()}>
          <h1>CHOOSE NAMES:</h1>
        </button>
      </div>
      <div>
        <h3 id="name1"></h3>
      </div>
      <div>
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
// Need to draw first name, then second name
// Need to "pair up" each random drawing

// Cannot draw name for respective couple
