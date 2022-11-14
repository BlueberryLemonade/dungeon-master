import './App.css';
import MonsterMenu from './components/Monsters/MonsterMenu';
import ChampionMenu from './components/Champions/ChampionMenu';
import DiceMenu from './components/Dice/DiceMenu';
import ArenaMenu from './components/Arena/ArenaMenu';
const App = () => {
  return (
    <div className="App-header">
      <MonsterMenu />
      <ChampionMenu/>
      <DiceMenu />
      <ArenaMenu />
    </div>
  );
};

export default App;
