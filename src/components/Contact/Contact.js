import React from 'react';
import PropTypes from 'prop-types';
import { FaGithubSquare, FaLinkedin, FaAngellist } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import { ImMail } from 'react-icons/im';
import style from './Contact.module.css';
import contactImage from '../../assets/contactImage.png';

const Contact = ({ themeMode }) => {
  React.useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('contactImage');
      const position = element.getBoundingClientRect();

      if (position.top < window.innerHeight) {
        element.classList.add('listAnimation');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const lightModeStyles = {
    backgroundColor: 'rgb(244 240 240)',
    color: 'rgb(32 161 196)',
  };

  const darkModeStyles = {
    backgroundColor: '#282c34',
    color: '#81dafb',
  };
  return (
    <div className={style.homePage} style={themeMode === 'light' ? lightModeStyles : darkModeStyles}>
      <div className={style.homeContainer}>
        <div className={style.descriptionContainer}>
          <h2 className={style.title}>Hi,</h2>
          <p className={style.description}>
            If you have an application you are interested in developing,
            a feature that you need built or a project that needs coding.
            I&apos;d love to help with it
          </p>
          <h4>Please reach out to me</h4>
          <div>
            <span className={style.buttonMedia}>
              <a href="mailto:ashasvijayan@gmail.com" target="_blank" rel="noreferrer">
                <ImMail />
              </a>
            </span>
            <span className={style.buttonMedia}>
              <a href="https://github.com/asharanjith" target="_blank" rel="noreferrer">
                <FaGithubSquare />
              </a>
            </span>
            <span className={style.buttonMedia}>
              <a href="https://linkedin.com/in/ashavijayan" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </span>
            <span className={style.buttonMedia}>
              <a href="https://wellfound.com/u/asha-sethu-vijayan" target="_blank" rel="noreferrer">
                <FaAngellist />
              </a>
            </span>
            <span className={style.buttonMedia}>
              <a href="https://medium.com/@ashasvijayan" target="_blank" rel="noreferrer">
                <BsMedium />
              </a>
            </span>
          </div>
        </div>
        <div className={style.imageContainer} id="contactImage">
          <img src={contactImage} className={style.homeImage} alt="..." />
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Contact;
