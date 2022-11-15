import MonsterMenu from '../Monsters/MonsterMenu';
import ChampionMenu from '../Champions/ChampionMenu';
import DiceMenu from '../Dice/DiceMenu';
import ArenaMenu from '../Arena/ArenaMenu';
import './OptionsMenu.css';
import { useState } from 'react';

const OptionsMenu = () => {

    //Try to design with OptionsMenu being king in mind. This is the heart of the application, the app itself just exists to give you access to this option menu.
    //As such it should hold all the important data until a better way of data manipulation can be found

    //Initial values
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

    //Selection Handler will recieve the text from a button which will be used with a switch to navigate to the correct submenu
    const selectionHandler = (event) => {
        setSelected(event.target.textContent);
    };

    const closeHandler = () => {
        setSelected("");
    };
    //Faux databases placeholders until a better data solution is found. When a new champion or enemy is saved, the data is pushed to this layer
    //to be stored in the database. 
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
                    //The Monster Menu is where you can create monsters by setting a name an health field. TODO: flesh out options like health and description
                    <MonsterMenu monsters={monsterDatabase} onSaveMonsters={saveMosters} onClose={closeHandler} />
                );
            case "Champions":
                return (
                    //Similar to the monster menu, champions can be created here by setting their health and name. TODO: extra options like STR/DEX/INT and bio
                    <ChampionMenu champions={championDatabase} onSaveChampions={saveChampions} onClose={closeHandler} />
                );
            case "Dice":
                return (
                    //The dice menu is a place where you can roll dice of various sizes. The stanard set for D&D is there, as well as an X option for an X-sided die to be added. 
                    <DiceMenu onClose={closeHandler} />
                );
            case "Arena":
                return (
                    //The Arena is a fighting ground for champions and monsters
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