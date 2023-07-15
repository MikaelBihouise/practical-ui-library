import React from 'react';

interface ButtonProps {
  text: string;
  disabled?: boolean;
  classnames?: string;
  click?: () => void;
  buttonType: 'submit' | 'reset' | 'button';
  btnDisabledClassname: string;
}

export default function Button({
  text, disabled, classnames, click, buttonType, btnDisabledClassname,
}:ButtonProps) {
  return (
    <button
      /* eslint-disable react/button-has-type */
      type={buttonType}
      /* eslint-enable react/button-has-type */
      className={`${classnames} ${disabled ? btnDisabledClassname : ''}`}
      onClick={click}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
