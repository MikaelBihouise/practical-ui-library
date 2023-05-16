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

interface ButtonProps {
  buttonText: string
  buttonDisabled?: boolean
  buttonClassnames?: string
  buttonClick?: () => void
  buttonType: 'submit' | 'reset' | 'button'
  buttonDisabledClassname: string
}

interface CardProps extends ButtonProps {
  cardClassname: string
  cardImage?: CardImage
  cardSubTitle?: CardTitle
  cardText?: CardText
  cardTitle?: CardTitle
}

export default function Card({
  cardClassname,
  cardImage,
  cardSubTitle,
  cardText,
  cardTitle,
  buttonText,
  buttonClick,
  buttonDisabled,
  buttonDisabledClassname,
  buttonType,
  buttonClassnames,
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
      {buttonType && (
        <button
          /* eslint-disable react/button-has-type */
          type={buttonType}
          /* eslint-enable react/button-has-type */
          className={`${buttonClassnames || ''} ${buttonDisabled ? buttonDisabledClassname : ''}`}
          onClick={buttonDisabled ? undefined : buttonClick}
          disabled={buttonDisabled}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
