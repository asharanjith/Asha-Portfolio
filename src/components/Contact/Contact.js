import React from 'react';
import PropTypes from 'prop-types';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { FaGithubSquare, FaLinkedin, FaAngellist } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import { ImMail } from 'react-icons/im';
import style from './Contact.module.css';
import contactImage from '../../assets/contactImage.png';

const Contact = ({ themeMode }) => {
  const [state, handleSubmit] = useForm('mwkjdqza');
  const [success, setSuccess] = React.useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    setSuccess(true);
    const formElement = event.target;
    formElement.reset();
    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

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
      {success && (
        <>
          <motion.div
            initial={{ opacity: 0, x: '30vw', scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: '-30vw', scale: 0.3 }}
            transition={{
              type: 'spring', stiffness: 120,
            }}
            className={style.success}
          >
            <p>Thanks for reaching out, will get back to you</p>
          </motion.div>
        </>
      )}
      <div className={style.homeContainer}>
        <div className={style.descriptionContainer}>
          <h2 className={style.title}>Hi,</h2>
          <p className={style.description}>
            If you have an application you are interested in developing,
            a feature that you need built, or a project that needs coding.
            I&apos;d love to help with it. Let&apos;s collaborate and bring your ideas to life!
          </p>
          <h4>Please reach out to me</h4>
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
          <form onSubmit={handleFormSubmit} className={style.contactForm}>
            <input
              id="name"
              type="name"
              name="name"
              placeholder="Name"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className="buttonLink">
              Get in touch
            </button>
          </form>
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
