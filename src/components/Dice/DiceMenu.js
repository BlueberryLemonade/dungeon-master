import { useState } from "react";
import Dicebag from "./Dicebag";

const DiceMenu = (props) => {

  const [roll, setRoll] = useState("0");

  const rollHandler = (rolledNumber) => {
    setRoll(rolledNumber);
  }

    const diceOptions = () => {
   
          return (
            <div>
              <p>{roll}</p>
              <Dicebag onRoll={rollHandler}/>
              <button onClick={props.onClose}>Close Dice</button>
            </div>
          );
      };

    return(
        <div>
        {diceOptions()}
        </div>
    )
};

export default DiceMenu;