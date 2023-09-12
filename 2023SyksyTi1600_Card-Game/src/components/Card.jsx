import '../App.css'
export default function Card({card}){
    return(
        <div className="card">
            <img src = {card.image}/>
            <ul>
                <li>
                    <span>{card.stats[0].name}</span>
                    <span> {card.stats[0].value} </span>
                </li>
            </ul>
        </div>
    );
}