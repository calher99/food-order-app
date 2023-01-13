import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-content";
import { useContext } from "react";

const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext);
    const numItems = cartCtx.items.reduce((prev , item)=>prev + item.amount, 0)

    return (
        <button className={classes.button} onClick={props.onSelect}>
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