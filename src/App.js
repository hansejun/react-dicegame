import Board from "./Board.js";
import Button from "./Button";
import { useState } from "react";
import logoImg from "./assets/logo.png";

const random = (n) => Math.ceil(Math.random() * n);

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleSetNum = () => {
    const randomNum = random(6);
    const otherRandomNum = random(6);

    setMyHistory([...myHistory, randomNum]);
    setOtherHistory([...otherHistory, otherRandomNum]);
  };
  const reset = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };
  return (
    <main className="app-main">
      <div className="app-logo">
        <img src={logoImg} />
        <h2>주사위 게임</h2>
      </div>
      <div className="app-buttons">
        <Button color="blue" onClick={handleSetNum}>
          던지기
        </Button>
        <Button color="red" onClick={reset}>
          다시하기
        </Button>
      </div>
      <div className="app-boards">
        <Board
          className="app-board"
          name="나"
          color="blue"
          gameHistory={myHistory}
        />
        <Board
          className="app-board"
          name="상대"
          color="red"
          gameHistory={otherHistory}
        />
      </div>
    </main>
  );
}

export default App;
