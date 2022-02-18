import Dice from "./Dice";
import Button from "./Button";

function Board({ name, color, gameHistory, className = "" }) {
  const num = gameHistory[gameHistory.length - 1];
  const sum = gameHistory.reduce((a, b) => a + b, 0);
  return (
    <div className={className}>
      <h1>{name}</h1>
      <Dice className="app-board__dice" color={color} num={num} />
      <h2>총점</h2>
      <p>{sum}</p>
      <h3>기록</h3>
      <p>{gameHistory.join(", ")}</p>
    </div>
  );
}

export default Board;
