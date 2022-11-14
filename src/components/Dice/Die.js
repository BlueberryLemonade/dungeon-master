const Die = (props) => {

    const randomInt = (max) => {
        return Math.floor(Math.random() * max) +1;
    };

    const roll = () => {
        console.log(randomInt(props.sides));

    };

    return(

        <button onClick={roll}>D{props.sides} </button>
    )
};

export default Die;