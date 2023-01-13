import React from 'react'
import classes from './Cart.module.css'

const Cart = () => {
    const DUMMY_CART = [{id: 'c1', name: 'Sushi', amount: '2', price: '12.99'}];
    const cartItems = <ul className={classes['cart-items']}>{DUMMY_CART.map( item => {
        <li>{item.name}</li>
    })}</ul>

    return (
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>

            totalAMount
            Actions
        </div>
    )
}

export default Cart