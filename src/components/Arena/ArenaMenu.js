import './ArenaMenu.css';

const Arena = props => {

  



  const arenaOptions = () => {
    return (
      <div>
        <h1>--------Arena---------</h1>
        <div className="monChampContainer">
        <div className="arenaMonsters">
          <h3>Monsters</h3>
          {props.monsters.map(monster => (
            <p>{monster.name}</p>
          ))}
        </div>
        <div className="arenaChampions">
          <h3>Champions</h3>
          {props.champions.map(champion => (
            <p>{champion.name}</p>
          ))}
        </div>
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