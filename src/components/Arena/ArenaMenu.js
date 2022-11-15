
const Arena = props => {

    const arenaOptions = () => {
          return (
            <div>
              <p>Arena</p>
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