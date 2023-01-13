import React from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef((props,ref) => {
  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        {/* <input id={props.input.id} value={} onChange={} ...MORE THINGS.../> */}
        <input ref= {ref} {...props.input}/>
        {/* Using object destructuring to separate all the props */}
    </div>
  );
})

export default Input