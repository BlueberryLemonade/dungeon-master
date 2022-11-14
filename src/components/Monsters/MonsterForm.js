import './MonsterForm.css';
import { useEffect, useState, useRef } from 'react';
import InputField from '../General/InputField';

const MonsterForm = (props) => {

    const[enteredName, setEnteredName] = useState("");
    const[enteredStrength, setEnteredStrength] = useState("");
    const[nameIsValid, setNameIsValid] = useState(false);
    const[strengthIsValid, setStrengthIsValid] = useState(false);
    
    const ref = useRef();

    useEffect(() => console.log(enteredName), [enteredName]);



    const nameChangeHandler = (event) => {
        const holder = event.target.value;
        if(holder.trim().length > 0){
            setNameIsValid(true);
        } else {
            setNameIsValid(false);
        }
        setEnteredName(holder);

        return;

    };

    const strengthChangeHandler = (event) => {
       
        setEnteredStrength(event.target.value);
    };

    const verifier = (event) => {
        event.preventDefault();
        if(enteredName.trim().length > 0){
            setNameIsValid(true);
        }

        if(enteredStrength.trim().length > 0){
            setStrengthIsValid(true);
        }

        if(nameIsValid && strengthIsValid){
            submitHandler(event);
            
        } 

    };


    const submitHandler = (event) => {
        event.preventDefault();
        //Checks to see if the entered strength and name are empty, if so, it sets them to invalid
       

        const monster = {
            name: enteredName,
            strength: enteredStrength
        };

        props.onMonsterAdded(monster);
        setEnteredName("");
        setEnteredStrength("");
    };

 
    return (
        <form onSubmit={verifier}>
            <div>
                <h2>Monster Creation</h2>
                <InputField name="Name" validity={nameIsValid} enteredValue={enteredName} onInputChange={nameChangeHandler} />
                <div>
                    <label className='labelText'>Strength: </label>
                    <input 
                    ref={ref}
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