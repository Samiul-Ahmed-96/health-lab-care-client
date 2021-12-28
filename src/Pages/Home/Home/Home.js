import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Doctors from '../Doctors/Doctors';
import HomeReviews from '../HomeReviews/HomeReviews';
import OurConcern from '../OurConcern/OurConcern';
import OurExpertise from '../OurExpertise/OurExpertise';
import OurSystem from '../OurSystem/OurSystem';
import Services from '../Services/Services';
import WorkingProcess from '../WorkingProcess/WorkingProcess';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OurSystem/>
            <Counter/>
            <Services/>
            <OurConcern/>
            <WorkingProcess/>
            <Doctors/>
            <HomeReviews/>
            <OurExpertise/>
            <AboutUs/>
        </div>
    );
};

export default Home;