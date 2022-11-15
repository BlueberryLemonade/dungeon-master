import Dicebag from "./Dicebag";

const DiceMenu = (props) => {



    const diceOptions = () => {
   
          return (
            <div>
              <Dicebag />
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