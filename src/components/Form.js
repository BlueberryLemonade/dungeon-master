import './Form.css';


const Form = () => {

    return (
        <form>
            <div>
                <h2>Monster Creation</h2>
                <div>
                    <label className='labelText'>Name: </label>
                    <input type='text'></input>
                </div>
                <div>
                    <label>Strength: </label>
                    <input type='number' min="0" max="9999" className='field'></input>
                </div>
            </div>
            <button type='submit'>Confirm</button>
        </form>
    )
};

export default Form;