import React from 'react';
import classes from './Header.module.css'
import mealsPic from '../../assets/meals.jpg'
import meals2Pic from '../../assets/meal2.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = props => {

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onSelect={props.onSelectCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={meals2Pic} alt='Table with food'/>
            </div>
        </React.Fragment>
    );
}

export default Header;