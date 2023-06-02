import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import style from './Projects.module.css';
import myProjects from './myProjects.json';

const Projects = ({ themeMode }) => {
  const [index, setIndex] = React.useState(0);

  const lightModeStyles = {
    backgroundColor: '#f2eded',
    color: 'rgb(0 0 0)',
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
      <h4>My projects</h4>
      <div className={style.slider}>
        <Carousel
          nextIcon={<AiFillRightCircle aria-hidden="true" className={`${style.icon}`} />}
          prevIcon={<AiFillLeftCircle aria-hidden="true" className={`${style.icon}`} />}
          activeIndex={index}
          onSelect={handleSelect}
          style={themeMode === 'light' ? lightModeStyles : darkModeStyles}
        >
          <Carousel.Item>
            <div className={style.item}>
              <div className="w-50 imageBox">
                <Image
                  className="d-block w-100 image"
                  src={myProjects[1].image}
                  alt="First slide"
                  fluid
                />
              </div>
              <div className={style.caption}>
                <Carousel.Caption style={themeMode === 'light' ? lightModeStyles : darkModeStyles} classname="carousel-caption">
                  <h3>{myProjects[1].name}</h3>
                  <p>{myProjects[1].description}</p>
                  <button type="button" className={style.buttonLink}><a href={myProjects[1].liveLink}>See Live</a></button>
                  <button type="button" className={style.buttonLink}><a href={myProjects[1].githubLink}>See Source</a></button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex">
              <div className="w-50">
                <Image
                  className="d-block w-100"
                  src={myProjects[0].image}
                  alt="First slide"
                  fluid
                />
              </div>
              <div className="w-50">
                <Carousel.Caption style={themeMode === 'light' ? lightModeStyles : darkModeStyles} className="text-right">
                  <h3>{myProjects[0].name}</h3>
                  <p>{myProjects[0].description}</p>
                  <button type="button" className={style.buttonLink}><a href={myProjects[0].liveLink}>See Live</a></button>
                  <button type="button" className={style.buttonLink}><a href={myProjects[0].githubLink}>See Source</a></button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

Projects.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Projects;
