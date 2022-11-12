import { useState } from "react";
import MonsterList from "./MonsterList";
import MonsterForm from "./MonsterForm";

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


const MonsterMenu = props => {


  const [isClicked, setIsClicked] = useState(false);


  const [monsters, setMonsters] = useState(DUMMY_MONSTERS);

  const formAndList = () => {
    if (!isClicked) {
      return (<div>
        <button type="button" onClick={openMonsterMenu}>Open Meny</button>
      </div>
      );
    } else {
      return (
        <div>
          <MonsterForm onMonsterAdded={addMonsterHandler} onCloseClick={closeMonsterMenu} />
          <MonsterList monsters={monsters} />
        </div>
      );
    }
  };



  const openMonsterMenu = () => {
    setIsClicked(true);
  };

  const closeMonsterMenu = () => {
    setIsClicked(false);
  };

  const addMonsterHandler = (monster) => {

    setMonsters((prevMonsters) => {
      return [monster, ...prevMonsters];
    });
  };


  return (
    <div>
      {formAndList()}
    </div>
  )

};


export default MonsterMenu;