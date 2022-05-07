import React from 'react';
import Header from '../src/components/Header';
import Hero from './components/hero';
import Menu from './components/menu';


const App = () => {
    return(
        <>
          <Menu />
          <Header />
          <Hero />
        </>
    );
};
export default App;