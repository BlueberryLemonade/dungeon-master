import { useState } from "react";
import MonsterList from "./MonsterList";
import MonsterForm from "./MonsterForm";




const MonsterMenu = props => {

  const [monsters, setMonsters] = useState(props.monsters);


  const deleteHandler = (monsterId) => {

    setMonsters(prevMonsters => {
      const updatedMonsters = prevMonsters.filter(monster => monster.name !== monsterId);
      return updatedMonsters;
    })
  };

  const saveMonsters = () => {
    props.onSaveMonsters(monsters);
  }

  const formAndList = () => {
   
      return (
        <div>
          <MonsterForm onMonsterAdded={addMonsterHandler} />
          <MonsterList monsters={monsters} onDeleteClick={deleteHandler} />
          <button type='button' onClick={saveMonsters} >Save Monsters</button>
          <button type='button' onClick={props.onClose} >Close Menu</button>
        </div>
      );

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