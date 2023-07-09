import React from 'react';
import ReactDOM from 'react-dom';
import Jakpus from './Jakpus';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Jakpus />, div);
  ReactDOM.unmountComponentAtNode(div);
});