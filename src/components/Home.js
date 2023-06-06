import React from 'react';
import PropTypes from 'prop-types';
import { FaGithubSquare, FaLinkedin, FaAngellist } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import { ImMail } from 'react-icons/im';
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
          <p className="text-muted"> A proud mom, and an engineering graduate.</p>
          <p className={style.description}>
            I can help you build a product,
            feature or website. Look through
            some of my work and experience!
            From crafting pixel-perfect user interfaces
            to building robust server-side logic,
            I enjoy the entire spectrum of web development.
            If you like what you see and have a project
            you need coded, don&apos;t hesitate to contact me.
          </p>
          <div>
            <span className="buttonMedia">
              <a href="mailto:ashasvijayan@gmail.com" target="_blank" rel="noreferrer">
                <ImMail />
              </a>
            </span>
            <span className="buttonMedia">
              <a href="https://github.com/asharanjith" target="_blank" rel="noreferrer">
                <FaGithubSquare />
              </a>
            </span>
            <span className="buttonMedia">
              <a href="https://linkedin.com/in/ashavijayan" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </span>
            <span className="buttonMedia">
              <a href="https://wellfound.com/u/asha-sethu-vijayan" target="_blank" rel="noreferrer">
                <FaAngellist />
              </a>
            </span>
            <span className="buttonMedia">
              <a href="https://medium.com/@ashasvijayan" target="_blank" rel="noreferrer">
                <BsMedium />
              </a>
            </span>
          </div>
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
