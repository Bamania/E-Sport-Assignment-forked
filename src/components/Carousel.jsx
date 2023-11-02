import React, { useState, useEffect, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Carousel = () => {
  const [, setTimestamp] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  const onLoad = () => setTimestamp(Date.now);
  const onSlideChanged = ({ item }) => setActiveIndex(item);

  const images = [
    'https://w.forfun.com/fetch/34/34fcf4edbca5e75d4d31967a6b49373e.jpeg',
    'https://images7.alphacoders.com/854/854917.jpg',
    'https://wallpapers.com/images/hd/blue-fortnite-desktop-hd-j1oac9i1pg3a0l7d.jpg',
  ];

  const items = images.map((image, index) => (
    <div key={index} className="carousel-item">
      <LazyLoader onLoad={onLoad} src={image} delay={1000 * (index + 1)} onClick={() => carouselRef.current.slideTo(index + 1)} />
    </div>
  ));

  return (
    <AliceCarousel
      autoHeight
      autoPlay
      autoPlayInterval={1000}
      fadeOutAnimation
      activeIndex={activeIndex}
      onSlideChanged={onSlideChanged}
      items={items}
      ref={carouselRef}
      disableButtonsControls={true}
      disableDotsControls
      infinite
      mouseTrackingEnabled={true}
    />
  );
};

function LazyLoader(props) {
  const { src = '', delay = 0, onClick, onLoad } = props;
  const [isMounted, setMounted] = useState(false);
  const [isLoading, setLoading] = useState(true);

  function loadImage() {
    const image = new Image();

    image.src = src;
    image.onload = () => {
      setLoading(false);
      onLoad();
    };
    image.onerror = () => {
      setLoading(false);
    };
  }

  useEffect(() => {
    if (!isMounted) {
      setMounted(true);
      delay ? setTimeout(loadImage, delay) : loadImage();
    }
  }, []);

  return (
    <div className="relative">
      <img className="w-[100rem] h-[40rem]" src={src} alt="Image" />
      <div className=''>
      <button className="absolute bottom-4 right-[43rem]  text-white px-3 py-1 rounded" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[70px] h-[70px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      </div>
      
    </div>
  );
}

export default Carousel;
