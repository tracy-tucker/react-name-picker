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

    // for (let i = 0; i < nameArr.length; i++) {
    //   if (n == nameArr[i]) {
    //     document.getElementById('nameList').style.color = 'red';
    //   }
    // }

    if (nameData.length == 0) {
      document.getElementById('name1').innerHTML = 'NO MORE NAMES';
    }
    console.log('NAME', nameArr);
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
          <li key={name.id} id="nameList">
            {name.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Once name is drawn, cannot be redrawn -- DONE
// Need to draw first name, then second name
// Need to "pair up" each random drawing

// Cannot draw name for respective couple
