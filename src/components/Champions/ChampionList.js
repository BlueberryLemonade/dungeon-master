import Champion from "./Champion";
const ChampionList = props => {

    if (props.champions.length === 0) {
        return <h2>No Champions in database</h2>
    }

    return (
        <ul>
            {props.champions.map((champion) => (
                <Champion
                    onDeleteClick={props.onDeleteClick}
                    key={champion.name}
                    name={champion.name}
                    strength={champion.strength}
                />
            ))}
        </ul>
    );
};

export default ChampionList;