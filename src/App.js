import './App.css';
import OptionsMenu from './components/Options/OptionsMenu';
import {Route, Routes} from 'react-router-dom';
import MonsterMenu from './components/Monsters/MonsterMenu';
import { useState } from 'react';

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


const App = () => {
  

  const[monsterDatabase, setMonsterDatabase] = useState(DUMMY_MONSTERS);



  const saveMosters = (monsterList) => {
    console.log("Saving monsters" + monsterList + "  " + "monsters now are : " + monsterDatabase);
    
    setMonsterDatabase(monsterList);
};

  return (
    <div className="App-header">
            
            <h1>DungeonMaster-er</h1>

      <Routes>
      <Route path="/" element={<OptionsMenu/>} />
      <Route path="/Monsters" element={<MonsterMenu onSave={saveMosters} monsters={monsterDatabase} />} />
      </Routes>
      

    </div>
  );
};

export default App;
