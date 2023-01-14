import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-content";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted]= useState(false);
    const cartCtx = useContext(CartContext);
    const numItems = cartCtx.items.reduce((prev , item)=>prev + item.amount, 0)

    const btnClasses = `${classes.button} ${btnIsHighlighted? classes.bump : ''}`;

    useEffect(()=>{
        if(cartCtx.items.length === 0){
            return
        }
        setBtnIsHighlighted(true)

        // We nned to set a time out to remove the class. Bc if the class is 
        // not removed then the animation does not show!
        const timer = setTimeout(()=>{
            setBtnIsHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }

    }, [cartCtx.items])
    
    return (
        <button className={btnClasses} onClick={props.onSelect}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numItems}
            </span>
        </button>
    );
}

export default HeaderCartButton;