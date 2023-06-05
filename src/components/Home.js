import React from 'react';
import PropTypes from 'prop-types';
import homepage from '../assets/homepage.png';
import style from './Home.module.css';

const Home = ({ themeMode }) => {
  const lightModeStyles = {
    backgroundColor: 'rgb(244 240 240)',
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
        <div className={style.imageContainer} id="imageBox">
          <img src={homepage} className={style.homeImage} alt="..." />
        </div>
        <div className={style.descriptionContainer}>
          <h2 className={style.title}>
            Hey there. I&apos;m
            <span> Asha.</span>
          </h2>
          <h4>I&apos;m a Full Stack Developer</h4>
          <p className={style.description}>
            I can help you build a product,
            feature or website. Look through
            some of my work and experience!
            If you like what you see and have a project
            you need coded, don&apos;t hestiate to contact me.
          </p>
          <button type="button" className="buttonLink">
            <a href="https://drive.google.com/file/d/1d_Ofo5C37NGMlP8L5upFXYChV1axO-VW/view?usp=sharing" target="_blank" rel="noreferrer">
              Get my Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Home;
