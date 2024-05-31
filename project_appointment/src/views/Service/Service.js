import React from 'react';
import './Service.scss';
import Header from '../../components/HomePage/Header.js';
import SectionService from '../../components/Service/SectionService.js';
import Footer from '../../components/HomePage/Footer.js';
import Specialist from '../../components/Service/Specialist.js';


function Service() {
    return (
        <div className="Service">
            <Header />
            <SectionService />
            <Specialist />
            <Footer />
        </div>
    );
}

export default Service;
