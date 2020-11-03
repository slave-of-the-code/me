import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './box.css';

const Box = ({ name }) => {
  const [animation, setAnimation] = useState({
    active: false
  });

  const handleButtonClick = (e) => {
    console.log('e', e.target.innerText);

    setAnimation({ active: !animation.active });
  };

  return (
    <button
      className={animation.active ? 'button--animation-button' : 'button'}
      onClick={handleButtonClick}
    >
      {name}
    </button>
  );
};

Box.propTypes = {
  name: PropTypes.string.isRequired
};

Box.defaultProps = {
  name: '<<??>>'
};

export default Box;
