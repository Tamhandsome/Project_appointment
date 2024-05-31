import React, { useState } from 'react';
import '../../styles/Specialist.scss';
import DoctorCards from '../../components/Service/DoctorCard.js';
import Datetime from '../../components/Service/Datetime.js';
import Profile from '../../components/Service/Profile.js';
import Confirm from '../../components/Service/Confirm.js';
import FindDoctor from '../../components/HomePage/FindDoctor.js';

const specialties = [
    { spname: 'DERMATOLOGY', description: 'Specializing in skin, hair, nail, and mucous membrane disorders' },
    { spname: 'TRAUMATOLOGY', description: 'Focuses on the diagnosis and treatment of injuries, particularly those involving the musculoskeletal system' },
    { spname: 'NEUROLOGY', description: 'Deals with the diagnosis and treatment of disorders affecting the nervous system, including the brain, spinal cord, and nerves' },
    { spname: 'Odontology', description: 'Specializes in the diagnosis, prevention, and treatment of oral diseases and conditions related to the teeth, gums, and mouth' },
];

const SpecialtySelection = ({ doctor, onBookingClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);

    const filteredSpecialties = specialties.filter(specialty =>
        specialty.spname.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSpecialtySelect = (specialty) => {
        setSelectedSpecialty(specialty);
    };


    return (
        <>
            <div className="specialty-selection">
                <h2>Please select a specialty</h2>
                <input
                    type="text"
                    placeholder="Find a specialty"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="specialty-list">
                    {filteredSpecialties.map((specialty, index) => (
                        <div key={index} className="specialty-item" onClick={() => handleSpecialtySelect(specialty)}>
                            <h3>{specialty.spname}</h3>
                            <p>{specialty.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                {selectedSpecialty && (
                    <div className="doctor-cards-container">
                        <DoctorCards
                            doctors={doctor}
                            selectedSpecialty={selectedSpecialty}
                            onBookingClick={onBookingClick}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

function Specialist() {
    const [currentView, setCurrentView] = useState('specialty');
    const [previousView, setPreviousView] = useState(null);
    const [history, setHistory] = useState([]);

    const handleBookingClick = () => {
        setPreviousView(currentView);
        setHistory(prevHistory => [...prevHistory, currentView]);
        setCurrentView('datetime');
    };

    const handleNextClick = () => {
        setPreviousView(currentView);
        setHistory(prevHistory => [...prevHistory, currentView]);
        setCurrentView('profile');
    };

    const handleProfileNextClick = () => {
        setPreviousView(currentView);
        setHistory(prevHistory => [...prevHistory, currentView]);
        setCurrentView('confirm');
    };

    const handleBackClick = () => {
        if (history.length > 0) {
            const prevView = history.pop();
            setCurrentView(prevView);
        }
    };

    return (
        <div className="specialist">
            {currentView === 'specialty' && <FindDoctor />}
            {currentView === 'specialty' && (
                <SpecialtySelection onBookingClick={handleBookingClick} />
            )}
            {currentView === 'datetime' && (
                <Datetime onNextClick={handleNextClick} onBackClick={handleBackClick} />
            )}
            {currentView === 'profile' && (
                <Profile onNextProfileClick={handleProfileNextClick} onBackClick={handleBackClick} />
            )}
            {currentView === 'confirm' && (
                <Confirm onBackClick={handleBackClick} />
            )}
        </div>
    );
}

export default Specialist;