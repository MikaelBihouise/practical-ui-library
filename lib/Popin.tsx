import React, { useState, ReactNode } from 'react';

type Button = {
  buttonText: string
  buttonDisabled?: boolean
  buttonClassnames?: string
  btnDisabledClassname?: string
  buttonType: 'submit' | 'reset' | 'button'
}
interface PopinProps {
  popinTitle?: string
  popinTitleClassname?: string
  popinContent?: string | ReactNode
  popinButtonType: 'submit' | 'reset' | 'button'
  popinButtonDisabled: boolean
  popinButtonClassname: string
  popinContainerClassname: string
  popinBackdropClassname: string
  button: Button
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
  button
}: PopinProps): ReactNode {
  const [popinOpen, setPopinOpen] = useState(false);
  return (
    <>
      <button
          /* eslint-disable react/button-has-type */
        type={button.buttonType}
          /* eslint-enable react/button-has-type */
        className={`${button.buttonClassnames} ${button.buttonDisabled ? button.btnDisabledClassname : ''}`}
        onClick={() => setPopinOpen(!popinOpen)}
        disabled={button.buttonDisabled}
      >
        {button.buttonText}
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
