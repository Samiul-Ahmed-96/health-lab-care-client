import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import OurSystem from '../OurSystem/OurSystem';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OurSystem/>
            <Services/>
            <AboutUs/>
            <Doctors/>
        </div>
    );
};

export default Home;