import './App.css'
import Card from './components/Card'
import PlayButton from './components/PlayButton';
import { useState } from 'react';
import {cardsData} from './components/CardDatabase';

const getRandomInt = (min,max)=> Math.floor(Math.random() * (max - min + 1) + min);

const playerCard = {
  image: 'http://placekitten.com/120/100?image=' +getRandomInt(0,15),
  stats: [{name:'Cuteness', value: getRandomInt(1, 999)},
          {name:'Speed', value: 90},
          {name:'Weight', value: 100}],
};

const opponentCard = {
  image: 'http://placekitten.com/120/100?image=2',
  stats: [{name:'Cuteness', value: 99},
          {name:'Speed', value: 123},
          {name:'Weight', value: 44}],
};

const createCard = index =>({
  name: cardsData[index].name,
  image: cardsData[index].image,
  stats: [{name:cardsData[index].stats[0].name, value:cardsData[index].stats[0].value},
          {name:cardsData[index].stats[1].name, value:cardsData[index].stats[1].value},
          {name:cardsData[index].stats[2].name, value:cardsData[index].stats[2].value},
        ],
  id: crypto.randomUUID(),
})

const deck = Array(6).fill(null).map((_,index) => createCard(index))

const half = Math.ceil(deck.length /2);

const dealCards = () =>{
  shuffle(deck);
  return{
    player: deck.slice(0,half),
    opponent: deck.slice(half)
  };
};

function shuffle(array){
  for(let i = array.length -1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function App(){
  
  const [result, setResult] = useState('');
  const [cards, setCards] = useState(dealCards);
  const [gameState, setGameState] = useState('Play');
  const [selectedStat, setSelectedStat] = useState(0);
  
  if(gameState !== 'Game_over' && (!cards.opponent.length || !cards.player.length))
  {
    setResult(()=>{
      if(!cards.opponent.length) return 'Player win!';
      else if(!cards.player.length) return 'Player loss!';
      return 'Draw';
    });
    setGameState('Game_over');
  }

  function compareCards(){
    
    const playerStat = cards.player[0].stats[selectedStat];
    const opponentStat = cards.opponent[0].stats[selectedStat];
    

    if(playerStat.value === opponentStat.value){
      setResult('Draw');
    }
    else if(playerStat.value > opponentStat.value){
      setResult('Win');
    }
    else{
      setResult('Loss');
    }
    setGameState('Result');
  }

  function nextRound(){
    setCards(cards =>{
      const playedCards = [{...cards.player[0]}, {...cards.opponent[0]}]
      const player = cards.player.slice(1);
      const opponent = cards.opponent.slice(1);
     
      if(result === 'Draw'){
        return{
          player,
          opponent
        };
      }

      if(result === 'Win'){
        return{
          player:[...player, ...playedCards],
          opponent
        };
      }

      if(result === 'Loss'){
        return{
          player,
          opponent:[...opponent, ...playedCards]
        };
      }
      return cards;
    })
    setGameState('Play');
    setResult('');
  }

  function restartGame(){
    setCards(dealCards);
    setResult('');
    setGameState('Play');
  }

  return(
    <>
      <h1>Hello World!</h1>
      <div className = 'game'>
        <div className="hand player">
          <ul className='card-list'>
              {cards.player.map((pCard, index) =>(
                <li className='card-list-item player' key={pCard.id}>
                  <Card card={ index === 0 ? pCard : null}
                  handleSelect={statIndex => gameState === 'Play' && setSelectedStat(statIndex)}
                  selectedStat={selectedStat}
                  />
                </li>
              ))}
          </ul>
        </div>

        <div className='center-area'>
          <p>{result || 'Press the button'}</p>
          {
            gameState === 'Play' ? (
              <PlayButton text={'Play'} handleClick={compareCards} />
            ) :
            gameState === 'Game_over' ? (
              <PlayButton text={'Restart'} handleClick={restartGame}/>
            ) :
            (
              <PlayButton text={'Next'} handleClick={nextRound} />
            )
          }
        </div>
        <div className='hand opponent'>
            <ul className='card-list opponent'>
              {cards.opponent.map((oCard,index)=>(
                <li className='card-list-item opponent' key={oCard.id}>
                  <Card card={result && index === 0 ? oCard : null} />
                </li>
              ))}
            </ul>
        </div>
        
      </div>
    </>
  );
}