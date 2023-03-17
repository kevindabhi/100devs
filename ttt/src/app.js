import {useState} from "react"

function Square({value, onSquareClick}) {
  return(
    <button className="square" onClick={onSquareClick} >
      {value}
    </button>
  );
  
}
function Board({xIsNext, squares, onPlay}){
  function handleClick(i) {
    if(calculateWinner(squares) ||  squares[i]){
      return;
    }
  }
}

