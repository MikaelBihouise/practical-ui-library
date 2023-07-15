import React, { useState, ReactNode } from 'react';

type Button = {
  buttonText: string
  buttonCloseText?: string
  buttonDisabled?: boolean
  buttonClassnames?: string
  btnDisabledClassname?: string
  buttonType: 'submit' | 'reset' | 'button'
}
interface CollapseProps {
  collapseContent?: string | ReactNode
  collapseContainerClassname: string
  button: Button
}

export default function Collapse({
  collapseContainerClassname,
  collapseContent,
  button
}: CollapseProps): ReactNode {
  const [collapseOpen, setCollapseOpen] = useState(false);
  return (
    <>
      <button
          /* eslint-disable react/button-has-type */
        type={button.buttonType}
          /* eslint-enable react/button-has-type */
        className={`${button.buttonClassnames} ${button.buttonDisabled ? button.btnDisabledClassname : ''}`}
        onClick={() => setCollapseOpen(!collapseOpen)}
        disabled={button.buttonDisabled}
      >
        {collapseOpen && button.buttonCloseText ? button.buttonCloseText : button.buttonText}
      </button>
      {collapseOpen && (
        <div className={collapseContainerClassname}>
          {collapseContent}
        </div>
      )}
    </>
  );
}
