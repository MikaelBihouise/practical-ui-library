import React, { ReactNode } from 'react';

type AllOrNone<T> = T | {[K in keyof T]?: never};

type CardImage = AllOrNone<{
  image: string
  alt: string
  classname: string
  containerClassname: string
}>

type CardTitle = AllOrNone<{
  classname: string
  title: string
}>

type CardText = AllOrNone<{
  classname: string
  text: string
}>

type Button = {
  buttonText: string
  buttonDisabled?: boolean
  buttonClassnames?: string
  buttonClick?: () => void
  buttonType: 'submit' | 'reset' | 'button'
  buttonDisabledClassname: string
}

interface CardProps {
  cardClassname: string
  cardImage?: CardImage
  cardSubTitle?: CardTitle
  cardText?: CardText
  cardTitle?: CardTitle
  button?: Button
}

export default function Card({
  cardClassname,
  cardImage,
  cardSubTitle,
  cardText,
  cardTitle,
button
}: CardProps): ReactNode {
  return (
    <div className={cardClassname}>
      {cardImage && (
        <div className={cardImage.containerClassname}>
          <img src={cardImage.image} alt={cardImage.alt} className={cardImage.classname} />
        </div>
      )}
      {cardTitle && (
        <div className={cardTitle.classname}>
          {cardTitle.title}
        </div>
      )}
      {cardSubTitle && (
        <div className={cardSubTitle.classname}>
          {cardSubTitle.title}
        </div>
      )}
      {cardText && (
        <div className={cardText.classname}>
          {cardText.text}
        </div>
      )}
      {button && (
        <button
          /* eslint-disable react/button-has-type */
          type={button.buttonType}
          /* eslint-enable react/button-has-type */
          className={`${button.buttonClassnames || ''} ${button.buttonDisabled ? button.buttonDisabledClassname : ''}`}
          onClick={button.buttonDisabled ? undefined : button.buttonClick}
          disabled={button.buttonDisabled}
        >
          {button.buttonText}
        </button>
      )}
    </div>
  );
}
