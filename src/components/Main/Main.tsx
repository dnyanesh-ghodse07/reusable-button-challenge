import React from 'react';
import Button from '../Button/Button';
import { useContext } from 'react';
import { ButtonContext } from '../Context/ButtonContext';
import './Main.scss';

const Main = () => {
  const {buttonProps} = useContext<any>(ButtonContext);
  console.log(buttonProps);
  
  return (
    <div className='main'>
        <h1 className='title'>Reusable Button</h1>
        <div className='button-container'>
        <Button color={buttonProps.color} size={buttonProps.size} variant={buttonProps.outline ? `outline` : buttonProps.text ? 'text' : undefined}>
            Default
        </Button>
        </div>
    </div>
  )
}

export default Main