

import React, { useState } from 'react'
import PropTypes from "prop-types";
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
       // console.log('Hola mundo desde submit')
        event.preventDefault(); //Evita que recarge la pagina al presionar enter
        console.log(inputValue);
        const inputClean = inputValue.trim();
        if( inputClean.trim().length <= 1) return;
        onNewCategory(inputClean)
        setInputValue('');
     }
  return (
    <form onSubmit={onSubmit} aria-label="form">
        <input
            type="text"
            placeholder='Buscar gifs'
            value={inputValue}
            onChange={ onInputChange }
            /* onChange={ (event) => onInputChange(event) } */
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}