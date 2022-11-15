import { useState } from "react";
import ChampionList from "./ChampionList";
import ChampionForm from "./ChampionForm";

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


const ChampionMenu = props => {

  const [champions, setChampions] = useState(DUMMY_CHAMPIONS);

  const deleteHandler = (championId) => {

    console.log(championId);

    setChampions(prevChampions => {
      const updatedChampions = prevChampions.filter(champion => champion.name !== championId);
      return updatedChampions;
    })
  };

  const formAndList = () => {
      return (
        <div>
          <ChampionForm onChampionAdded={addChampionHandler} />
          <ChampionList champions={champions} onDeleteClick={deleteHandler} />
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