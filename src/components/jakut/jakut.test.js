import React from 'react';
import ReactDOM from 'react-dom';
import Jakut from './Jakut';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Jakut />, div);
  ReactDOM.unmountComponentAtNode(div);
});