import React, { useRef, useState } from 'react'
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

const MealItemForm = props => {

    const inputMeal = useRef();
    const [isValid, setIsValid] = useState(true)


    const submitMealHandler = (e) => {
        e.preventDefault();
        const enteredAmount = inputMeal.current.value;
        // convert the amount to a number, always comes as a string
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmountNumber === ''|| enteredAmountNumber<1 || enteredAmountNumber>5){
          setIsValid(false)
          return
        }
      // We pass above the amount that we have chosen
      // In the parent component we will have all the data about the name,
      // id, etc
      // Here we just have a generic input data
      props.onAddToCart(enteredAmountNumber);
    }

  return (
    <form className={classes.form} onSubmit={submitMealHandler}>
        <Input ref = {inputMeal} label='amount' input={{
          id: `amount${props.id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}/>
        <button>+ Add</button>
        <p>{!isValid && 'Please enter a number(1 to 5)'}</p>
    </form>
  )
}

export default MealItemForm