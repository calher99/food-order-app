import React from 'react'
import classes from './MealItemForm.module.css'

const MealItemForm = props => {
    const submitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <label>Amount</label>
        <input type='number'/>
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm