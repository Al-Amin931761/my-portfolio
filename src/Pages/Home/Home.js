import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import MyProjects from '../MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
            <About></About>
            <MyProjects></MyProjects>
            <Contact></Contact>
        </div>
    );
};

export default Home;