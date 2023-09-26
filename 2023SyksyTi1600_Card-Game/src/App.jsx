import './App.css'
import Card from './components/Card'
import { useState } from 'react';

const playerCard = {
  image: 'http://placekitten.com/120/100',
  stats: [{name:'Cuteness', value: 100},
          {name:'Speed', value: 90},
          {name:'Weight', value: 100}],
};

const opponentCard = {
  image: 'http://placekitten.com/120/100?image=2',
  stats: [{name:'Cuteness', value: 99},
          {name:'Speed', value: 123},
          {name:'Weight', value: 44}],
};

export default function App(){
  
  const [result, setResult] = useState('');

  function compareCards(){
    
    const playerStat = playerCard.stats[0];
    const opponentStat = opponentCard.stats[0];
    

    if(playerStat.value === opponentStat.value){
      setResult('Draw');
    }
    else if(playerStat.value > opponentStat.value){
      setResult('Win');
    }
    else{
      setResult('Loss');
    }
    console.log(result);
  }

  return(
    <>
      <h1>Hello World!</h1>
      <div className = 'game'>
        <Card card={playerCard} />
        <div className='center-area'>
          <p>{result || 'Press the button'}</p>
          <button onClick={compareCards} type="button">Play</button>
        </div>
        <Card card={opponentCard} />
      </div>
    </>
  );
}