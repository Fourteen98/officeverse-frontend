/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const slideStyles = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const rightArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  right: '2px',
  fontSize: '45px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
};

const leftArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  left: '2px',
  fontSize: '45px',
  color: '#fff',
  zIndex: 1,
  cursor: 'pointer',
};

const sliderStyles = {
  // position: 'relative',
  height: '100%',
};

const Imageslider = ({slides}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex]})`,
  };
  
  return (
    <div style={sliderStyles}>
      <div>
        <div style={leftArrowStyles} onClick={goToPrevious} > 
          ❰
        </div>
        <div style={rightArrowStyles} onClick={goToNext}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground} />
    </div>
  );
};

// props validation
Imageslider.prototype = {
  slides: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Imageslider;
