import React from 'react';
import Cards from './Cards'; 
import './styles.css';
const App = () => {
  return (
    <div className='content'>
       <Cards 
          image="../tiffin.jpeg"
          name="Idli"
        />
        <Cards
          image="../biri.jpeg"
          name="Biriyani"
        />
        <Cards
        image="../pizza.jpeg"
        name="Pizza"
        />
    </div>
  );
};
export default App;