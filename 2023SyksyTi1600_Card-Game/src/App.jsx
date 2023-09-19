import './App.css'
import Card from './components/Card'

const playerCard = {
  image: 'http://placekitten.com/120/100',
  stats: [{name:'Cuteness', value: 9},
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
  
  function compareCards(){
    console.log("Button clicked!")
    const playerStat = playerCard.stats[0];
    const opponentStat = opponentCard.stats[0];
    
  }

  return(
    <>
      <h1>Hello World!</h1>
      <Card card={playerCard} />
      <button onClick={compareCards} type="button">Play</button>
      <Card card={opponentCard} />
    </>
  );
}