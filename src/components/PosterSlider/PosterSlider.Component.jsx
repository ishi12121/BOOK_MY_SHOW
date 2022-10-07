import React from 'react';
import Slider from 'react-slick';
import Poster from "../Poster/Poster.Component";
const PosterSlider = (props) => {

  
  
  const Settings = {
    infinite: false,
    speed: 500,
    slideToShow: 5,
    slideToScroll:4,
    responsive: [ 
      {
        breakpoint: 1600,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
        },
    },
      {
      breakpoint: 1300,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
      },
  },
  {
      breakpoint: 600,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          InitialSlide: 2,
      },
  },
  {
      breakpoint: 480,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
      },
  },
  {
    breakpoint: 100,
    settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
    },
},
]
  };

  const {posters ,title ,subtitle ,isDark ,config } = props;
  


  return (

    <>
    
    <div className='flex flex-col items-start sm:ml-3 ml-0 my-2'>
      <h3 className={`text-2xl font-bold  ${
        isDark ? "text-white":"text-black"}   
        `}>
      {title}
      </h3>
      <p className={`text-sm ${
        isDark ? "text-white":"text-gray-800"}  
         `}>
      
      {subtitle}
      </p>  
    </div>


    {config && (
    <Slider {...config}>
    {posters.map((each, index) => (
        <Poster {...each} isDark={isDark} key={index} />
    ))}
   
</Slider>
)}
{!config && (
  <Slider {...Settings}>
  {posters.map((each, index) => (
      <Poster {...each} isDark={isDark} key={index} />
  ))}
 
</Slider>
)}

    </>
  );
};

export default PosterSlider;