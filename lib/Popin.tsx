import React, { useState, ReactNode } from 'react';

interface ButtonProps {
  buttonText: string
  buttonDisabled?: boolean
  buttonClassNames?: string
  btnDisabledClassname?: string
  buttonType: 'submit' | 'reset' | 'button'
}

interface PopinProps extends ButtonProps {
  popinTitle?: string
  popinTitleClassname?: string
  popinContent?: string | ReactNode
  popinButtonType: 'submit' | 'reset' | 'button'
  popinButtonDisabled: boolean
  popinButtonClassname: string
  popinContainerClassname: string
  popinBackdropClassname: string
}

export default function Popin({
  popinTitle,
  popinTitleClassname,
  popinContainerClassname,
  popinContent,
  popinBackdropClassname,
  popinButtonType,
  popinButtonDisabled,
  popinButtonClassname,
  buttonText,
  buttonDisabled,
  buttonClassNames,
  btnDisabledClassname,
  buttonType,
}: PopinProps): ReactNode {
  const [popinOpen, setPopinOpen] = useState(false);
  return (
    <>

      <button
          /* eslint-disable react/button-has-type */
        type={buttonType}
          /* eslint-enable react/button-has-type */
        className={`${buttonClassNames} ${buttonDisabled ? btnDisabledClassname : ''}`}
        onClick={() => setPopinOpen(!popinOpen)}
        disabled
      >
        {buttonText}
      </button>
      {popinOpen && (
      <>
        <div className={popinContainerClassname}>
          <button
            /* eslint-disable react/button-has-type */
            type={popinButtonType}
            /* eslint-enable react/button-has-type */
            className={popinButtonClassname}
            onClick={() => { setPopinOpen(!popinOpen); }}
            disabled={popinButtonDisabled}
          >
            &#10006;
          </button>
          <h2 className={popinTitleClassname}>{popinTitle}</h2>
          {popinContent}
        </div>
        <div className={popinBackdropClassname} onClick={() => { setPopinOpen(!popinOpen); }} aria-hidden="true" />
      </>
      )}
    </>
  );
}
