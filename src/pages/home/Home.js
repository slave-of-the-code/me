import React from 'react';
import PropTypes from 'prop-types';

import './home.css';

const Home = ({ title, children }) => {
  return (
    <div className="home__container">
      <h1 className="home__title">{title}</h1>
      <section>{children}</section>
    </div>
  );
};

Home.propTypes = {
  title: PropTypes.string.isRequired
};
Home.defaultProps = {
  title: 'home'
};

export default Home;
