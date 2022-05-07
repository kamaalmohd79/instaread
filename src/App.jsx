import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Menu from './components/Menu.jsx';


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