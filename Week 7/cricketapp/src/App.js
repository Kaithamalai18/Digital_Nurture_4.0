
import React from 'react';
import ListofPlayers from './components/ListOfPlayers';
import Scorebelow70 from './components/Scorebelow70';
import { OddPlayers, EvenPlayers } from './components/OddEvenPlayers';
import ListofIndianPlayers from './components/IndianPlayers';

function App() {

  let flag = false;

  const players = [
     { name: 'MS DHONI', score: 50 },
    { name: 'TEMBA BAVUMA', score: 70 },
    { name: 'SHIKAR DHAWAN', score: 40 },
    { name: 'HARDIK PANDYA', score: 61 },
    { name: 'RAJAT PATIDAR', score: 61 },
    { name: 'AB DE VILLIERS', score: 95 },
    { name: 'VIRAT KOHLI', score: 100 },
    { name: 'GLENN MAXWELL', score: 84 },
    { name: 'KRUNAL PANDYA', score: 64 },
    { name: 'CHRIS GAYLE', score: 75 },
    { name: 'FAF DU PLESSIS', score: 80 },
  ];

  const IndianTeam = ['Virat Kohli', 'MS Dhoni', 'Virat', 'Rohit', 'Yuvaraj', 'Raina'];

  const T20Players = ['Virat Kohli','Rohit Sharma', 'Hardik Pandya'];
  const RanjiTrophyPlayers = ['Vaibhav Suryavanshi', 'Ayush Mhatre', 'Vipraj Nigam'];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <Scorebelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h1>Odd Players</h1>
          <OddPlayers players={IndianTeam} />
          <hr />
          <h1>Even Players</h1>
          <EvenPlayers players={IndianTeam} />
        </div>
        <hr />
        <div>
          <h1>List of Indian Players Merged</h1>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      </div>
    );
  }
}

export default App;
