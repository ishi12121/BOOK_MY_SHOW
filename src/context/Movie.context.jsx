import React, {useState} from 'react';


export const MovieContext = React.createContext();


const MovieProvider = ({ children }) => {

  const [movie, setMovie] = useState({
    id: 0,
    original_title: "",
    overview: "",
    backdrop_path: "",
    poster_path: "",


  });
  const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

  const rentMovies = () => {
    setIsOpen(true);
    setPrice(149);
};

const buyMovies = () => {
    setIsOpen(true);
    setPrice(599);
};


  return (
    <MovieContext.Provider value={{movie, setMovie, isOpen ,setIsOpen,price,setPrice,rentMovies,buyMovies}}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;