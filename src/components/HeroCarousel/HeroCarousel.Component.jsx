import React,{useState, useEffect} from 'react';
import HeroSlider from "react-slick";
import { NextArrow, PrevArrow } from './Arrows.Components';
import axios from 'axios';

const HeroCarousel = () => {

 const [images, setImages] = useState([]);

 useEffect(() => {
  const requestNowPlayingMovies = async () => {
      const getImages = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=4dece8d7dde9f9104b0079352edcd775");
      setImages(getImages.data.results);
  };

  requestNowPlayingMovies();
}, []);
 
 const settingsLG = {
  arrows: true,
  autoplay: true,
  centerMode: true,
  centerPadding: "200px",
  slidesToShow: 1,
  infinite: true,
  slideToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,
   speed:2000,
   autoplaySpeed: 4000,
   cssEase: "linear"
};

const settings = {
  arrows: true,
  slidesToShow: 1,
  infinite: true,
  speed: 500,
  slideToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};



  return (
    <>
    <div className="lg:hidden">
    <HeroSlider {...settings}>
        {images.map((image,index) => (
            <div className="w-full h-56 md:h-80 py-3" key={index}>
                <img
                    src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                    alt="Hero Banner"
                    className="w-full h-full rounded-md object-center "
                />
            </div>
        ))}
    
          </HeroSlider>
         </div>
       <div className='hidden lg:block'>
       <HeroSlider {...settingsLG}>
       {images.map((image, index) => (
           <div className="w-full h-96 px-2 py-3" key={index}>
               <img
                   src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                   alt="Hero Banner"
                   className="w-full h-full rounded-md object-center "
               />
           </div>
       ))}
   </HeroSlider>
</div>
      
    </>
  );
}

export default HeroCarousel;