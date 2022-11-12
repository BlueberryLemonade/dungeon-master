import './Monster.css';

const Monster = (props) => {

    return(
        <div className='monster'>
    <p>Name: {props.name}</p>
    <p>Strength: {props.strength}</p>
    </div>
    )
};

export default Monster;