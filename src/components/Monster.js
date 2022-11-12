import './Monster.css';

const Monster = (props) => {

    return(
        <div className='monster'>
    <p>Name: {props.name}    |    Strength: {props.strength}</p>
    
    </div>
    )
};

export default Monster;