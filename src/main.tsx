import 'bootstrap/dist/css/bootstrap.min.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    label?: string;
  }
}

const container = document.getElementById('root');
ReactDOM.render(<App />, container);
