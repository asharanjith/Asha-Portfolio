import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import { TbSourceCode } from 'react-icons/tb';
import style from './Projects.module.css';
import myProjects from './myProjects.json';

const Projects = ({ themeMode }) => {
  const [index, setIndex] = React.useState(0);

  const lightModeStyles = {
    backgroundColor: 'rgb(244 240 240)',
    color: 'rgb(32 161 196)',
  };

  const darkModeStyles = {
    backgroundColor: '#282c34',
    color: '#81dafb',
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={style.projectContainer} style={themeMode === 'light' ? lightModeStyles : darkModeStyles}>
      <h2 className="text-decoration-underline pb-2">My Recent Works</h2>
      <div className={style.slider}>
        <Carousel
          nextIcon={<AiFillRightCircle aria-hidden="true" className={`${style.icon}`} />}
          prevIcon={<AiFillLeftCircle aria-hidden="true" className={`${style.icon}`} />}
          activeIndex={index}
          onSelect={handleSelect}
          style={themeMode === 'light' ? lightModeStyles : darkModeStyles}
        >
          {myProjects.map((project) => (
            <Carousel.Item key={project.id}>
              <div className={style.item}>
                <div className="w-50 imageBox">
                  <Image
                    className="d-block w-100 image"
                    src={project.image}
                    alt="First slide"
                    fluid
                  />
                </div>
                <div className={style.caption}>
                  <Carousel.Caption style={themeMode === 'light' ? lightModeStyles : darkModeStyles} className="carousel-caption">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className={style.skillsBox}>
                      {project.skills.map((skill, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <span key={index} className={style.skills}>{skill}</span>
                      ))}
                    </div>
                    <button type="button" className="buttonLink">
                      <a href={project.liveLink}>
                        <BsFillEyeFill className={style.captionIcon} />
                        See Live
                      </a>
                    </button>
                    <button type="button" className="buttonLink">
                      <a href={project.githubLink}>
                        <TbSourceCode className={style.captionIcon} />
                        See Source
                      </a>
                    </button>
                  </Carousel.Caption>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

Projects.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Projects;
