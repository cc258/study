import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => {
  <li
    onClick={onclick}
    style={{ color: completed ? 'green' : 'orange' }}
  >
    {text}
  </li>
}

export default Todo;


