import React from 'react';
import ReactDOM from 'react-dom';
import Jaktim from './Jaktim';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Jaktim />, div);
  ReactDOM.unmountComponentAtNode(div);
});