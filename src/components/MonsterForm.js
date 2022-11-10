import './MonsterForm.css';
import { useState } from 'react';


const MonsterForm = (props) => {

    const[enteredName, setEnteredName] = useState("");
    const[enteredStrength, setEnteredStrength] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const strengthChangeHandler = (event) => {
        setEnteredStrength(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();


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
                <div>
                    <label className='labelText'>Name: </label>
                    <input 
                        type='text'
                        value={enteredName}
                        onChange={nameChangeHandler}
                    ></input>
                </div>
                <div>
                    <label>Strength: </label>
                    <input type='number' min="0" max="9999" className='field'
                    value={enteredStrength}
                    onChange={strengthChangeHandler}></input>
                </div>
            </div>
            <button type='submit' >Confirm</button>
        </form>
    )
};

export default MonsterForm;