import { useState } from "react";

const Arena = props => {


    const[isClicked, setIsClicked] = useState(false);
    
    const openArenaMenu = () => {
        setIsClicked(true);
    };

    const closeArenaMenu = () => {
        setIsClicked(false);
    };


    const arenaOptions = () => {
        if (!isClicked) {
          return (
          <div>

                <button onClick={openArenaMenu}>Open Arena</button>          
                </div>
          );
        } else {
          return (
            <div>
              <p>Arena</p>
              <button onClick={closeArenaMenu}>Close Arena</button>
            </div>
          );
        }
      };

    return (
        <div>
            {arenaOptions()}
        </div>
    )
}

export default Arena;