import React from 'react';
import ReactDOM from 'react-dom';
import PSeribu from './PSeribu';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PSeribu />, div);
  ReactDOM.unmountComponentAtNode(div);
});