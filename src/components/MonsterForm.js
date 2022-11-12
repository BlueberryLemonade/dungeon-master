import './MonsterForm.css';
import { useState } from 'react';


const MonsterForm = (props) => {

    const[enteredName, setEnteredName] = useState("");
    const[enteredStrength, setEnteredStrength] = useState("");
    const[nameIsValid, setNameIsValid] = useState(true);
    const[strengthIsValid, setStrengthIsValid] = useState(true);
    

    


    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const strengthChangeHandler = (event) => {
        setEnteredStrength(event.target.value);
    };


    const submitHandler = (event) => {
        event.preventDefault();
        //Checks to see if the entered strength and name are empty, if so, it sets them to invalid
        if(enteredName.trim().length === 0){
            setNameIsValid(false);
            return;
        }

        if(enteredStrength.trim().length === 0){
            setStrengthIsValid(false);
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
            <div>
                <h2>Monster Creation</h2>
                <div >
                    <label className='labelText'>Name: </label>
                    <input
                        className={`nameField ${!nameIsValid ? 'invalid' : ''}`}
                        type='text'
                        value={enteredName}
                        onChange={nameChangeHandler}
                    ></input>
                </div>
                <div>
                    <label className='labelText'>Strength: </label>
                    <input 
                    type='number' 
                    className={`strengthField ${!strengthIsValid ? 'invalid' : ''}`}
                    min="0" 
                    max="9999" 
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