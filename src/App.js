import Dice from "./Dice"
import Button from "./Button";
function App(){
  return (
    <div>
      <div>
        <Button>처음부터</Button>
        <Button>다시하기</Button>
      </div>
      <Dice color="red" num={4}/>
    </div>
  )
}

export default App;