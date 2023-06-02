import React from 'react';
import PropTypes from 'prop-types';
import homepage from '../assets/homepage.png';
import style from './Home.module.css';

const Home = ({ themeMode }) => {
  const lightModeStyles = {
    backgroundColor: '#ffffff',
    color: 'rgb(32 161 196)',
    opacity: '1',
  };

  const darkModeStyles = {
    backgroundColor: '#282c34',
    color: '#81dafb',
  };
  return (
    <div className={style.homePage} style={themeMode === 'light' ? lightModeStyles : darkModeStyles}>
      <div className={style.homeContainer}>
        <div className={style.imageContainer}>
          <img src={homepage} className={style.homeImage} alt="..." />
        </div>
        <div className={style.descriptionContainer}>
          {/* <div className="card-body"> */}
          <h5 className={style.title}>Card title</h5>
          <p className={style.description}>
            This is a wider card with supporting
            text below as a natural lead-in to additional content.
            This content is a little bit longer.
          </p>
          <p className={style.resume}><small className="text-muted">Last updated 3 mins ago</small></p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Home;
