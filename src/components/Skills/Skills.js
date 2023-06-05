import React from 'react';
import PropTypes from 'prop-types';
import {
  FaHtml5, FaCss3, FaReact, FaBootstrap, FaFigma,
} from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import {
  SiReactrouter, SiRedux, SiJest, SiRuby, SiRubyonrails, SiPostgresql, SiJsonwebtokens,
} from 'react-icons/si';
import { GiCapybara } from 'react-icons/gi';
import { GoRuby } from 'react-icons/go';
import { MdOutlineMobileFriendly } from 'react-icons/md';
import style from './Skills.module.css';

const Skills = ({ themeMode }) => {
  React.useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('ulList');
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
    <div style={themeMode === 'light' ? lightModeStyles : darkModeStyles} className={style.skillsContainer}>
      <h2>Skills</h2>
      <div className={style.skillBox} id="ulList">
        <ul>
          <li>
            <FaHtml5 />
            {'  '}
            HTML5
          </li>
          <li>
            <FaCss3 />
            {'  '}
            CSS3
          </li>
          <li>
            <TbBrandJavascript />
            {'  '}
            JavaScript
          </li>
          <li>
            <FaReact />
            {'  '}
            React
          </li>
          <li>
            <FaBootstrap />
            {'  '}
            Bootstrap
          </li>
          <li>
            <SiReactrouter />
            {'  '}
            React Router
          </li>
          <li>
            <SiRedux />
            {'  '}
            Redux
          </li>
          <li>
            <FaFigma />
            {'  '}
            Figma
          </li>
          <li>
            <SiJest />
            {'  '}
            Jest
          </li>
        </ul>
        <ul>
          <li>
            <SiRuby />
            {'  '}
            Ruby
          </li>
          <li>
            <SiRubyonrails />
            {'  '}
            Rails
          </li>
          <li>
            <SiPostgresql />
            {'  '}
            PostgreSQL
          </li>
          <li>
            <GoRuby />
            {'  '}
            Rspec
          </li>
          <li>
            <SiJsonwebtokens />
            {'  '}
            JWT
          </li>
          <li>
            <GiCapybara />
            {'  '}
            Capybara
          </li>
          <li>
            <MdOutlineMobileFriendly />
            {'  '}
            Devise
          </li>
          <li>CanCanCan</li>
        </ul>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>Chrome DevTools</li>
          <li>Slack</li>
          <li>Postman</li>
          <li>Remote Pair Programming</li>
          <li>Render</li>
          <li>Vercel</li>
          <li>Mentoring</li>
        </ul>
      </div>
    </div>
  );
};

Skills.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Skills;
