import React from 'react';
import ReactDOM from 'react-dom';
import Jakbar from './Jakbar';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Jakbar />, div);
  ReactDOM.unmountComponentAtNode(div);
});