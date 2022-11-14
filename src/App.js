import './App.css';
import MonsterMenu from './components/Monsters/MonsterMenu';
import ChampionMenu from './components/Champions/ChampionMenu';
const App = () => {
  return (
    <div className="App-header">
      <MonsterMenu />
      <ChampionMenu/>
    </div>
  );
};

export default App;
