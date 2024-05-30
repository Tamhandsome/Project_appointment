import React, { useState } from 'react';
import './Service.scss';
import Header from '../../components/HomePage/Header.js';
import SectionService from '../../components/Service/SectionService.js';
import FindDoctor from '../../components/HomePage/FindDoctor.js';
import DoctorCard from '../../components/Service/DoctorCard.js';
import Footer from '../../components/HomePage/Footer.js';
import Datetime from '../../components/Service/Datetime.js';
import Profile from '../../components/Service/Profile.js';
import Specialist from '../../components/Service/Specialist.js';

function Service() {
    const [currentView, setCurrentView] = useState('doctorCard');
    const [showFindDoctor, setShowFindDoctor] = useState(true);
    const [viewHistory, setViewHistory] = useState([]);

    const handleBookingClick = () => {
        setViewHistory(prevHistory => [...prevHistory, currentView]);
        setCurrentView('datetime');
        setShowFindDoctor(false);
    };

    const handleNextClick = () => {
        if (currentView === 'datetime') {
            setViewHistory(prevHistory => [...prevHistory, currentView]);
            setCurrentView('profile');
        }
    };

    const handleBackClick = () => {
        const newHistory = [...viewHistory];
        const previousView = newHistory.pop();
        setCurrentView(previousView);
        setViewHistory(newHistory);
        if (newHistory.length === 0) {
            setShowFindDoctor(true);
        }
    };

    return (
        <div className="Service">
            <Header />
            <SectionService />

            {showFindDoctor && <FindDoctor />}
            {currentView === 'doctorCard' ? (
                <DoctorCard onBookingClick={handleBookingClick} />
            ) : currentView === 'datetime' ? (
                <Datetime onNextClick={handleNextClick} />
            ) : (
                <Profile />
            )}
            {viewHistory.length > 0 && (
                <button className="return" onClick={handleBackClick}>Back</button>
            )}
            <Footer />
        </div>
    );
}

export default Service;
