import React from 'react';
import Particles from 'react-particles-js';
import AboutMe from '../AboutMe/AboutMe';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import MyProjects from '../MyProjects/MyProjects';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Features></Features>
            <MyProjects></MyProjects>
            <Blog></Blog>
            <AboutMe></AboutMe>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;