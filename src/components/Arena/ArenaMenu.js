import './ArenaMenu.css';
import ArenaList from './ArenaList';
import { useState } from 'react';

const Arena = props => {


  const[selectedChampion, setSelectedChampions] = useState("");
  const[selectedMonster, setSelectedMonster] = useState("");
  const selectionHandler = (event) => {
    console.log(event.target.parentElement.className);

    switch(event.target.parentElement.className){
      case "Champions" : setSelectedChampions(event.target.textContent);
      break;
      case "Monsters" : setSelectedMonster(event.target.textContent);
      break;
      default :
    } 
  }




  const arenaOptions = () => {
    return (
      <div>
        <h1>--------Arena---------</h1>
        <h2>========================</h2>
        <p>Champion: {selectedChampion}</p>
        <p>Monster: {selectedMonster}</p>
        <div className="monChampContainer">
          <div className="arenaMonsters">
            <ArenaList onSelected={selectionHandler} className="Monsters" database={props.monsters} />
          </div>
          <ArenaList onSelected={selectionHandler} className="Champions" database={props.champions} />
        </div>

        <button onClick={props.onClose}>Close Arena</button>
      </div>
    );
  };

  return (
    <div>
      {arenaOptions()}
    </div>
  )
}

export default Arena;