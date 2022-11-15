import MonsterMenu from '../components/Monsters/MonsterMenu';
import ChampionMenu from '../components/Champions/ChampionMenu';
import DiceMenu from '../components/Dice/DiceMenu';
import ArenaMenu from '../components/Arena/ArenaMenu';
import './OptionsMenu.css';
import { useState } from 'react';

const OptionsMenu = () => {

    const options = ["Monsters", "Champions", "Dice", "Arena"];
    const DUMMY_MONSTERS = [
        {
          name: "Goblin",
          strength: 2
        },
        {
          name: "Spider",
          strength: 1
        }
      ];
    const DUMMY_CHAMPIONS = [
        {
          name: "Strongman",
          strength: 50
        },
        {
          name: "Weakguy",
          strength: 3
        }
      ];
      

    const [selected, setSelected] = useState("");
    const[championDatabase, setChampionDatabase] = useState(DUMMY_CHAMPIONS); 
    const[monsterDatabase, setMonsterDatabase] = useState(DUMMY_MONSTERS);

    const selectionHandler = (event) => {
        setSelected(event.target.textContent);
    };

    const closeHandler = () => {
        setSelected("");
    };

    const saveChampions = (championList) => {
        
        setChampionDatabase(championList);
    };

    const saveMosters = (monsterList) => {
        setMonsterDatabase(monsterList);
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
                return (
                    <MonsterMenu monsters={monsterDatabase} onSaveMonsters={saveMosters} onClose={closeHandler} />
                );
            case "Champions":
                return (
                    <ChampionMenu champions={championDatabase} onSaveChampions={saveChampions} onClose={closeHandler} />
                );
            case "Dice":
                return (
                    <DiceMenu onClose={closeHandler} />
                );
            case "Arena":
                return (
                    <ArenaMenu onClose={closeHandler} />

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