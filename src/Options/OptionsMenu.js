import MonsterMenu from '../components/Monsters/MonsterMenu';
import ChampionMenu from '../components/Champions/ChampionMenu';
import DiceMenu from '../components/Dice/DiceMenu';
import ArenaMenu from '../components/Arena/ArenaMenu';
import OptionsButton from './OptionsButton';
import { useState } from 'react';

const OptionsMenu = () => {

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
                     <button onClick={selectionHandler}>Monsters</button>
                     <OptionsButton name="Champions"  />
                     <OptionsButton name="Dice"  />
                     <OptionsButton name="Arena"  />

                    
                    </div>
                );
            case "Monsters":
                return(
                        <MonsterMenu onSelected={selectionHandler} onClose={closeHandler}/>
                );
            case "champion":
                return(
                        <ChampionMenu  onClose={closeHandler}/>
                );
            case "dice":
                return(
                         <DiceMenu onSelected={selectionHandler} onClose={closeHandler}/>
                );  
            case "arena":
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