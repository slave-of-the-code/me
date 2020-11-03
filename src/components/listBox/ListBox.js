import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/box/Box';

const ListBox = ({ listBox }) => {
  return (
    <div>
      <ul>
        {listBox.map((box, i) => {
          return <Box key={i} name={box} />;
        })}
      </ul>
      <section className="board"></section>
    </div>
  );
};

ListBox.propTypes = {
  listBox: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ListBox;
