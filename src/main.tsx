import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Calculator from './Calculator';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    label?: string;
  }
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<Calculator />, container);
