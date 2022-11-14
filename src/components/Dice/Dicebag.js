import { useState } from "react";

const Dicebag = (props) => {
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
              <p>Dice</p>
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

export default Dicebag;