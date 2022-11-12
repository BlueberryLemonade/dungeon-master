import './MonsterForm.css';
import { useState } from 'react';


const MonsterForm = (props) => {

    const[enteredName, setEnteredName] = useState("");
    const[enteredStrength, setEnteredStrength] = useState("");
    const[isValid, setIsValid] = useState(true);

    


    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const strengthChangeHandler = (event) => {
        setEnteredStrength(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();
        if(enteredName.trim().length === 0 || enteredStrength.trim().length === 0){
            setIsValid(false);
            return;
        }

        const monster = {
            name: enteredName,
            strength: enteredStrength
        };

        props.onMonsterAdded(monster);
        setEnteredName("");
        setEnteredStrength("");
    };

 
    return (
        <form onSubmit={submitHandler}>
            <div className={`monsterForm ${!isValid ? 'invalid' : ''}`}>
                <h2>Monster Creation</h2>
                <div >
                    <label className='labelText'>Name: </label>
                    <input
                        type='text'
                        value={enteredName}
                        onChange={nameChangeHandler}
                    ></input>
                </div>
                <div>
                    <label className='labelText'>Strength: </label>
                    <input type='number' min="0" max="9999" 
                    value={enteredStrength}
                    onChange={strengthChangeHandler}></input>
                </div>
            </div>
            <button type='submit' >Confirm</button>
            <button type='button' onClick={props.onCloseClick} >Close Menu</button>
        </form>
    )
};

export default MonsterForm;