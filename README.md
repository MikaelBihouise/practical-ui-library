# Practical-ui-library

P-UI Library is a comprehensive and modular component library for building modern web applications. It provides a set of reusable UI components and utilities that can be easily integrated into your project. 

## Features

- Adapt to your own design system
- Not happy with the component as is, go to the docs and modify it as you wish
- Reusable

## Installation

```bash
npm install p-ui-library
```

## Usage

```bash
import React from 'react';

interface ButtonProps {
  text: string;
  disabled?: boolean;
  classNames?: string;
  click?: () => void;
  buttonType: 'submit' | 'reset' | 'button';
}

export default function Button({
  text, disabled, classNames, click, buttonType,
}:ButtonProps) {
  return (
    <button
      type={buttonType}
      className={`${classNames ? classNames : ''} ${disabled ? 'btn-disabled' : ''} btn-default`}
      onClick={disabled ? undefined : click}
    >
      {text}
    </button>
  );
}
```

## Documentation

For detailed documentation and usage instructions, please refer to the P-UI-Library documentation [p-ui-library].

## Issues

If you encounter any issues or have questions, please file an issue on the practical-ui-library repository [https://github.com/MikaelBihouise/practical-ui-library/issues].

## License

Practical-ui-library is an open source software licensed under the MIT License. Please see [https://github.com/MikaelBihouise/practical-ui-library/blob/main/LICENSE] for more information.
