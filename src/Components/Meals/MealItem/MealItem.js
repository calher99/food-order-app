import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-content'

const MealItem = props => {
    const ctx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = amount =>{
        // Function that will be triggered every time we submit a form
        // It wil also pass the amount that we have chosen from the item

        // Call ctx and pass it a new Item with the data from the triggered form
        // HOW TO PASS DATA TO THE CONTEXT
        ctx.addItem({
            name: props.name,
            price: props.price,
            id: props.id,
            amount: amount
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.text}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart = {addToCartHandler}/>
            </div>
           
        </li>
    )
}

export default MealItem