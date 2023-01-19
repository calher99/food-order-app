import React, { useEffect } from 'react'
import useHttp from '../../hooks/use-https';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';
// Unrealistic component bc these would be retrieved from an API


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];
const AvailableMeals = () => {
    const { isLoading, error, sendRequest: fetchMeals } = useHttp();
    const { isLoad, erro, sendRequest: sendMeals } = useHttp();

    useEffect(() => {
        const transformMeals = (mealsObj) => {
            const loadedMeals = [];
            console.log(mealsObj)
            // for (const mealKey in mealsObj) {
            //   loadedMeals.push({ id: mealKey, text: mealsObj[mealKey].text });
            // }
      
            // setMeals(loadedTasks);
          };

        fetchMeals(
            { url: 'https://academind-react-5d8ac-default-rtdb.europe-west1.firebasedatabase.app/meals.json' },
            transformMeals
        )
    }, [fetchMeals])
    useEffect(() => {
        const func = objcreated => {
            console.log(objcreated)
        }
        sendMeals({
            url: 'https://academind-react-5d8ac-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
            method: 'POST',
            body: { 
             id: DUMMY_MEALS[3].id,
             name: DUMMY_MEALS[3].name,
             description: DUMMY_MEALS[3].description,
             price: DUMMY_MEALS[3].price,

                 },
            headers: {
              'Content-Type': 'application/json',
            },
          }, 
          func
          )
    }, [sendMeals])

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map(meal => {
                        return (
                            <MealItem
                                key={meal.id}
                                id={meal.id}
                                name={meal.name}
                                text={meal.description}
                                price={meal.price}
                            />
                        );
                    })}
                </ul>
            </Card>
        </section>

    )
}

export default AvailableMeals