import React from 'react';
import ReactDOM from 'react-dom';
import Jaksel from './Jaksel';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Jaksel />, div);
  ReactDOM.unmountComponentAtNode(div);
});