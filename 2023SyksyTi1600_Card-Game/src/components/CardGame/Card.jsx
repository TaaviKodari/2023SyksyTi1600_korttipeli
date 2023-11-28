import '../../App.css'
export default function Card({card,selectedStat,handleSelect}){
   if(!card) return <div className='card back'/>;
    
    return(
        <div className="card">
            <img src = {card.image}/>
            <span className='card-name'>{card.name}</span>
            <ul className='stat-list'>
                {card.stats.map((stat, index) =>(
                    <li className={`stat-list-item${selectedStat === index ? ' selected' :''}`} 
                    onClick={()=> handleSelect && handleSelect(index)}
                    key={index}>
                        <span>{stat.name}</span>
                        <span> {stat.value} </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}