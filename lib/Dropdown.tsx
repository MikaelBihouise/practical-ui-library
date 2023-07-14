import React, { useState, ReactNode } from 'react';

type Button = {
  buttonText: string
  buttonDisabled?: boolean
  buttonClassnames?: string
  btnDisabledClassname?: string
  buttonType: 'submit' | 'reset' | 'button'
}

interface dropdownContent {
  id: number
  contentHref: string
  contentText: string
}

interface DropdownProps {
  dropdownItems: dropdownContent[]
  contentClassname: string
  dropdownContainerClassname: string
  button: Button
}

export default function Dropdown({
  dropdownContainerClassname,
  dropdownItems,
  button,
  contentClassname
}: DropdownProps): ReactNode {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <button
          /* eslint-disable react/button-has-type */
        type={button.buttonType}
          /* eslint-enable react/button-has-type */
        className={`${button.buttonClassnames} ${button.buttonDisabled ? button.btnDisabledClassname : ''} ${dropdownOpen ? 'dropdown-open' : ''}`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        disabled={button.buttonDisabled}
      >
        {button.buttonText}
      </button>
      {dropdownOpen && (
        <ul className={dropdownContainerClassname}>
          {dropdownItems?.map((item) => (
            <li className={contentClassname} key={item.id}>
              <a  href={item.contentHref}>
                {item.contentText}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
