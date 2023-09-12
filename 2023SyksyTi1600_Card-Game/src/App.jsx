import './App.css'
import Card from './components/Card'

const playerCard = {
  image: 'http://placekitten.com/120/100',
  stats: [{name:'Cuteness', value: 9}],
};

export default function App(){
  return(
    <>
      <h1>Hello World!</h1>
      <Card card={playerCard} />
    </>
  );
}