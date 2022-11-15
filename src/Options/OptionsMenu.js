import MonsterMenu from '../components/Monsters/MonsterMenu';
import ChampionMenu from '../components/Champions/ChampionMenu';
import DiceMenu from '../components/Dice/DiceMenu';
import ArenaMenu from '../components/Arena/ArenaMenu';
import './OptionsMenu.css';
import { useState } from 'react';

const OptionsMenu = () => {

    const options = ["Monsters", "Champions", "Dice", "Arena"];

    const [selected, setSelected] = useState("");

    const selectionHandler = (event) => {
        setSelected(event.target.textContent);
    };

    const closeHandler = () => {
        setSelected("");
    };

    const Options = () => {

        switch (selected) {
            case "":
                return (
                    <div>
                        <ul>
                     {options.map(option => 
                    <li>
                     <button onClick={selectionHandler}>{option}</button>
                     </li>
                    )}

                        </ul>
                    
                    </div>
                );
            case "Monsters":
                return(
                        <MonsterMenu onSelected={selectionHandler} onClose={closeHandler}/>
                );
            case "Champions":
                return(
                        <ChampionMenu  onClose={closeHandler}/>
                );
            case "Dice":
                return(
                         <DiceMenu onSelected={selectionHandler} onClose={closeHandler}/>
                );  
            case "Arena":
                return(
                    <ArenaMenu onSelected={selectionHandler} onClose={closeHandler}/>

                );

             default: 
             return (
                <div>
                    <p>Error in Options Menu</p>
                </div>
            );


        }


    };


    return (
        <div>
            {Options()}
        </div>
    )
};

export default OptionsMenu;