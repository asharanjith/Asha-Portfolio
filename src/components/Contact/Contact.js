import React from 'react';
import PropTypes from 'prop-types';

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

    <div style={themeMode === 'light' ? lightModeStyles : darkModeStyles}>
      <h1>Contact me</h1>
    </div>
  );
};

Contact.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Contact;
