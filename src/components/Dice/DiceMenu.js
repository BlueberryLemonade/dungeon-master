import { useState } from "react";
import Dicebag from "./Dicebag";

const DiceMenu = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    const openDiceMenu = () => {
        setIsClicked(true);
    };

    const closeDiceMenu = () =>{
        setIsClicked(false);
    };

    const diceOptions = () => {
        if (!isClicked) {
          return (<div>
                <button onClick={openDiceMenu}>Open Dice</button>          
                </div>
          );
        } else {
          return (
            <div>
              <Dicebag />
              <button onClick={closeDiceMenu}>Close Dice</button>
            </div>
          );
        }
      };

    return(
        <div>
        {diceOptions()}
        </div>
    )
};

export default DiceMenu;