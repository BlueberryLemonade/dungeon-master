const InputField = props => {

    return (
        <div >
            <label className='labelText'>{props.name} </label>
            <input
                className={`nameField ${!props.validity ? 'invalid' : ''}`}
                type='text'
                value={props.enteredInput}
                onChange={props.onInputChange}
            ></input>
        </div>
    )

};

export default InputField;