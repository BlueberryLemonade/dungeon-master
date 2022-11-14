import './App.css';
import MonsterMenu from './components/Monsters/MonsterMenu';
import ChampionMenu from './components/Champions/ChampionMenu';
import Dicebag from './components/Dice/Dicebag';
import Arena from './components/Arena/Arena';
const App = () => {
  return (
    <div className="App-header">
      <MonsterMenu />
      <ChampionMenu/>
      <Dicebag />
      <Arena />
    </div>
  );
};

export default App;
