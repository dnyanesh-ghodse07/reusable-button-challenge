import React from 'react';
import './Button.scss';
type ButtonProps = {
    variant?: "text" | 'outline',
    disabled?: boolean,
    disableShadow?: boolean,
    startIcon?: string,
    endIcon?: string,
    size?: "sm" | "md" | "lg", 
    color?: "default" | "primary" | "secondary" | "danger",
    children: React.ReactNode,
    className?: string
}
const Button: React.FC<ButtonProps> = ({color,disableShadow,disabled,endIcon,size,startIcon,variant,children,className}) => {
  return (<button className={`button ${className} ${color} ${size} ${variant} ${disabled && 'disabled'}`}>
      {children}
  </button>
  )
}

export default Button