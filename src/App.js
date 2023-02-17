import Square from "./Square";
import "./App.css";
import { useState } from "react";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);

  const [player, setPlayers] = useState(true);

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""])
    setPlayers(true)
  }

  const calculateWinner = (arr) => {
    let lines = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8], [2, 5, 8], [1, 4, 7]]

    for(let i = 0; i < lines.length; i++){
      const [a, b, c] = lines[i]
      if(arr[a] && arr[a] === arr[b] && arr[a] === arr[c]){
        return `${arr[a]} won!`
      }
    }
    return 'Who will take the W?'
  }

  return (
    <div className="App">
      <span>{calculateWinner(squares)}</span>
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square
              square={squares}
              setSquares={setSquares}
              player={player}
              setPlayers={setPlayers}
              squareValue={value}
              index={index}
            />
          );
        })}
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
