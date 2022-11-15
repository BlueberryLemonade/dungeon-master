import { useState } from "react";

const Arena = props => {


    const[isClicked, setIsClicked] = useState(false);
    
    const openArenaMenu = () => {
        props.onSelected("arena");
        setIsClicked(true);
    };

    const closeArenaMenu = () => {
        props.onClose();
        setIsClicked(false);
    };


    const arenaOptions = () => {
        if (!isClicked) {
          return (
          <div>

                <button onClick={openArenaMenu}>Arena</button>          
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