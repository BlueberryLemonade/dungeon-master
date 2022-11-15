import MonsterMenu from '../components/Monsters/MonsterMenu';
import ChampionMenu from '../components/Champions/ChampionMenu';
import DiceMenu from '../components/Dice/DiceMenu';
import ArenaMenu from '../components/Arena/ArenaMenu';
import { useState } from 'react';

const OptionsMenu = () => {

    const [selected, setSelected] = useState("");

    const selectionHandler = (selection) => {
        setSelected(selection);

    }

    const closeHandler = () => {
        setSelected("");
    }
    const Options = () => {

        switch (selected) {
            case "":
                return (
                    <div>
                        <MonsterMenu onSelected={selectionHandler} onClose={closeHandler} />
                        <ChampionMenu />
                        <DiceMenu />
                        <ArenaMenu />
                    </div>
                )
             case "monster":
                return(
                    <div>
                        <MonsterMenu onSelected={selectionHandler} onClose={closeHandler}/>
                    </div>
                )   
             default: 
             return (
                <div>
                    <MonsterMenu onSelected={selectionHandler} onClose={closeHandler}/>
                    <ChampionMenu />
                    <DiceMenu />
                    <ArenaMenu />
                </div>
            )


        }


    };


    return (
        <div>
            {Options()}
        </div>
    )
};

export default OptionsMenu;