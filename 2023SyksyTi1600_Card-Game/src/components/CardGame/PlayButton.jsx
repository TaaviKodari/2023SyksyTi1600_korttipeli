export default function PlayButton({text, handleClick}){
    return(
        <button onClick={handleClick} type="button" className='play-button'>{text}</button>
    );
}