import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import OurConcern from '../OurConcern/OurConcern';
import OurSystem from '../OurSystem/OurSystem';
import Services from '../Services/Services';
import WorkingProcess from '../WorkingProcess/WorkingProcess';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OurSystem/>
            <Services/>
            <OurConcern/>
            <WorkingProcess/>
            <Doctors/>
            <AboutUs/>
        </div>
    );
};

export default Home;