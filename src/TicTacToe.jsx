import { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import Button from "@mui/material/Button";
export function TicTacToe() {
  const { width, height } = useWindowSize();
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [isXTurn, setIsXTurn] = useState(true);
  const handleClick = (index) => {
    console.log(index);
    if (!winner && board[index] === null) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O ";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  };
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] != null && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);
  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="Tic-Tac-Toe">
      {winner ? (
        <Confetti width={width} height={height} gravity={0.05} />
      ) : null}

      <h1>Tic Tac Toe Game</h1>
      <div className="board">
        {board.map((val, index) => (
          <GameBox
            key={index}
            val={val}
            onPlayerClick={() => handleClick(index)}
          />
        ))}
      </div>
      <Button onClick={restartGame} size="small" variant="contained">
        Restart
      </Button>
      {winner ? <p className="winner">The winner is {winner}</p> : null}
    </div>
  );
}
function GameBox({ val, onPlayerClick, index }) {
  // const [val, setVal] = useState("");
  const styles = {
    color: val === "X" ? "red" : "green",
  };
  return (
    <div
      key={index}
      style={styles}
      onClick={onPlayerClick}
      className="Game-box"
    >
      {val}
    </div>
  );
}
