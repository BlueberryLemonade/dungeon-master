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

  const [isClicked, setIsClicked] = useState(false);
  const [champions, setChampions] = useState(DUMMY_CHAMPIONS);

  const deleteHandler = (championId) => {

    console.log(championId);

    setChampions(prevChampions => {
      const updatedChampions = prevChampions.filter(champion => champion.name !== championId);
      return updatedChampions;
    })
  };

  const formAndList = () => {
    if (!isClicked) {
      return (<div>
        <button type="button" onClick={openChampionMenu}>Champions</button>
      </div>
      );
    } else {
      return (
        <div>
          <ChampionForm onChampionAdded={addChampionHandler} onCloseClick={closeChampionMenu} />
          <ChampionList champions={champions} onDeleteClick={deleteHandler} />
        </div>
      );
    }
  };



  const openChampionMenu = () => {
    setIsClicked(true);
   
  };

  const closeChampionMenu = () => {
    props.onClose();
    setIsClicked(false);
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