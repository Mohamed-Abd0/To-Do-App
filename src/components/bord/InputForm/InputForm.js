
import clases from './InputForm.module.css' ;
import Button from '../../UI/Button';
import { useState } from 'react';

const Inputform = (prop)=>{

    const [EnteredValue , setEnteredValue] = useState('') ;
    const [valid , setValid] = useState(true);

    // set the entered value on change input value
    const TaskChangeHandler = (event)=>{
        setEnteredValue(event.target.value);
    };
    
    // handle the submition
    const formSubmitHandler = (e)=>{
        //check the validation
        e.preventDefault();
        if(EnteredValue.trim().length === 0){
            setValid(false);
        }else{
            setValid(true);

            // pass the data up to the App
            prop.onAddTask(EnteredValue)
            
            // reset the input feild 
            setEnteredValue('')
        }
    }

    return (
    <form onSubmit={formSubmitHandler}>
        <div
        className={`${clases['form-control']} ${valid===false && clases.invalid}`}>
            <label>Course Goal</label>
            <input type="text" value={EnteredValue} onChange={TaskChangeHandler} />
        </div>
        <Button type="submit">Add Goal</Button>
    </form>
    )
}
export default Inputform