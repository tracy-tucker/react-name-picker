import React, { useContext } from 'react';
import { nameData } from './Names';
import styled from 'styled-components';
import './style.css';

const List = styled.li`
  list-style: none;
  padding: 5px;
  font-size: 1.5rem;
`;

const Container = styled.div`
  margin-top: 10px;
  width: 60%;
  padding: 10px;
  text-align: center;
  border: 1px dashed gray;
`;

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
          <h1>CHOOSE NAME:</h1>
        </button>
      </div>
      <Container>
        <h3 id="name1"></h3>
      </Container>

      <ul>
        {nameData.map((name) => (
          <List key={name.id} id="nameList">
            {name.name}
          </List>
        ))}
      </ul>
    </div>
  );
}

// Once name is drawn, cannot be redrawn -- DONE
// Need to draw first name, then second name
// Need to "pair up" each random drawing

// Cannot draw name for respective couple
