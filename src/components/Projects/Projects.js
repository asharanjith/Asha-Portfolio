import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';
import style from './Projects.module.css';

const Projects = () => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={style.projectContainer}>
      <h4>My recent projects</h4>
      {/* <div className={style.slider}> */}
      <Carousel
        nextIcon={<AiFillRightCircle aria-hidden="true" className={`${style.icon}`} />}
        prevIcon={<AiFillLeftCircle aria-hidden="true" className={`${style.icon}`} />}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <a href="https://www.google.com">Google</a>
            <button type="button" className="btn btn-primary">Primary</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Third slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="https://www.google.com">Google</a>
            <button type="button" className="btn btn-primary">Primary</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <a href="https://www.google.com">Google</a>
            <button type="button" className="btn btn-primary">Primary</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  // </div>
  );
};

export default Projects;
