import React, { useEffect, useState } from 'react';
import './imgP.css'
const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeTrans = 4000; // transition time in milliseconds
  const slides = [
    {
      title: 'We are all members of the community',
      description: 'Upload shipments and take their shipments to friends.',
      link: '#Sign up',
    },
    {
      title: 'Anyone can be a delivery',
      description: 'want to earn a momey "By the way".',
      link: '#',
    },
    {
      title: 'Volunteers in the community.',
      description: 'Ours take part in the community, do good in the world.',
      link: '#',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (autoPlay) {
        setCurrent((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
      }
    }, timeTrans);

    return () => clearInterval(intervalId);
  }, [autoPlay]);

  const changeSlide = (index) => {
    setCurrent(index);
  };

  const handleMouseEnter = () => {
    setAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setAutoPlay(true);
  };

  return (
    <header>
      <section className="slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ul>
          {slides.map((slide, index) => (
            <li key={index} className={index === current ? 'current' : ''}>
              <article className="center-y padding_2x">
                <h3 className="big title">
                  {slide.title.split('').map((char, i) => (
                    <em key={i}>{char}</em>
                  ))}
                </h3>
                <p>{slide.description}</p>
                <a href={slide.link} className="btn btn_3">
                  {index === 0 ? 'More about us' : 'View Issues'}
                </a>
              </article>
            </li>
          ))}
          <aside>
            {slides.map((_, index) => (
              <a key={index} className={index === current ? 'current_dot' : ''} onClick={() => changeSlide(index)}></a>
            ))}
          </aside>
        </ul>
      </section>
      <a href="#services" className="cs-down"></a>
    </header>
  );
};

export default Slider;
