import { useState } from "react";
import ChampionList from "./ChampionList";
import ChampionForm from "./ChampionForm";



const ChampionMenu = props => {

  const [champions, setChampions] = useState(props.champions);

  const deleteHandler = (championId) => {

    setChampions(prevChampions => {
      const updatedChampions = prevChampions.filter(champion => champion.name !== championId);
      return updatedChampions;
    })
  };

  const saveHandler = () => {
    props.onSaveChampions(champions);
  }

  const formAndList = () => {
      return (
        <div>
          <ChampionForm onChampionAdded={addChampionHandler} />
          <ChampionList champions={champions} onDeleteClick={deleteHandler} />
          <button type='button' onClick={saveHandler} >Save Champions</button>

          <button type='button' onClick={props.onClose} >Close Menu</button>
        </div>
      );
    
  };


  const addChampionHandler = (champion) => {

    setChampions((prevChampions) => {
      return [champion, ...prevChampions];
    });
  };


  return (
    <div>
      {formAndList()}
    </div>
  )

};


export default ChampionMenu;