import React, { useState, useEffect } from "react";
import CarouselItem from './carouselItem';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { toolsList } from "../toolsList";
import "./styles.css";

const Carousel = ({translationFunction, tools}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numSlides, setNumSlides] = useState(2);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setNumSlides(1);
      } else {
        setNumSlides(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const previous = () => {
    setCurrentIndex((currentIndex - numSlides + tools.length) % tools.length);
  };

  const next = () => {
    setCurrentIndex((currentIndex + numSlides) % tools.length);
  };

  return (
    <div className="carousel">
			<button onClick={previous} className="tools-action">
				<FontAwesomeIcon
					className="tools-icon"
					size="lg"
					icon={faChevronLeft}
				/>
			</button>
      <div className="carousel-wrapper">
        {tools.map((tool, index) => {
          const isActive =
            index >= currentIndex && index < currentIndex + numSlides;
          const className = `carousel-slide ${isActive ? "active" : ""}`;
          return (
            <div className={className} key={index}>
              <CarouselItem translationFunction={translationFunction} tool={tool}/>
            </div>
          );
        })}
      </div>
      <button onClick={next} className="tools-action">
        <FontAwesomeIcon
					className="tools-icon"
					size="lg"
					icon={faChevronRight}
        />
    	</button>
    </div>
  );
};

export default Carousel;
