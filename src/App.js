import './App.css';
import MonsterForm from './components/MonsterForm';
import MonsterList from './components/MonsterList';
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
  const [monsters, setMonsters] = useState(DUMMY_MONSTERS);

  const addMonsterHandler = (monster) => {
      setMonsters((prevMonsters) => {
        return [monster, ...prevMonsters];;
      });
  };

  return (
    <div className="App-header">
       <MonsterForm onMonsterAdded={addMonsterHandler}/>
       <MonsterList monsters={monsters}/>
    </div>
  );
}

export default App;
