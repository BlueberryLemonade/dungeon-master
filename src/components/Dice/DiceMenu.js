import { useState } from "react";
import Dicebag from "./Dicebag";

const DiceMenu = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    const openDiceMenu = () => {
        props.onSelected("dice");
        setIsClicked(true);
    };

    const closeDiceMenu = () =>{
        props.onClose();
        setIsClicked(false);
    };

    const diceOptions = () => {
        if (!isClicked) {
          return (<div>
                <button onClick={openDiceMenu}>Dice</button>          
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