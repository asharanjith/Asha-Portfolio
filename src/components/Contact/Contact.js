import React from 'react';
import PropTypes from 'prop-types';
import { FaGithubSquare, FaLinkedin, FaAngellist } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import { ImMail } from 'react-icons/im';
import style from './Contact.module.css';

const Contact = ({ themeMode }) => {
  const lightModeStyles = {
    backgroundColor: '#ffffff',
    color: 'rgb(32 161 196)',
  };

  const darkModeStyles = {
    backgroundColor: '#282c34',
    color: '#81dafb',
  };
  return (

    <div style={themeMode === 'light' ? lightModeStyles : darkModeStyles} className={style.contactContainer}>
      <h3>Contact me</h3>
      <div className={style.contactBox}>
        <ImMail />
        <FaGithubSquare />
        <FaLinkedin />
        <FaAngellist />
        <BsMedium />
      </div>
    </div>
  );
};

Contact.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Contact;
