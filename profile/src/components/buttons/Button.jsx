import React from 'react';
import './Button.scss';

export const Button = ({ width, height, text, size, onClick }) => { 
  const buttonHeight = height || '40px';
  const buttonWidth = size === 'large' && !width ? '220px' : width || '90px';

  const buttonStyle = {
    width: buttonWidth,
    height: buttonHeight,
  };

  const buttonClass = size === 'large' ? 'button large' : 'button small';

  return (
    <button className={buttonClass} style={buttonStyle} onClick={onClick}> 
      {text}
    </button>
  );
};
