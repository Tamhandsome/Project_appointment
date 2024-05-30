// DoctorCards.js
import React from 'react';
import DoctorCard from '../../components/Service/DoctorCard.js';
import logo from '../../assets/images/Logo.png';

function DoctorCards({ selectedSpecialty, onBookingClick }) {
    // List of doctors for demonstration
    const doctors = [
        { id: 1, name: "Dr. Smith", image: logo, specialty: "DERMATOLOGY" },
        { id: 2, name: "Dr. Jones", image: logo, specialty: "TRAUMATOLOGY" },
        { id: 3, name: "Dr. Taylor", image: logo, specialty: "NEUROLOGY" },
        { id: 4, name: "Dr. Brown", image: logo, specialty: "DERMATOLOGY" }, // Add more doctors with different specialties
    ];

    // Filter doctors based on selected specialty
    const filteredDoctors = selectedSpecialty
        ? doctors.filter(doctor => doctor.specialty === selectedSpecialty.name.toUpperCase())
        : doctors;

    return (
        <div className="doctor-cards">
            {filteredDoctors.map(doctor => (
                <DoctorCard key={doctor.id} onBookingClick={onBookingClick} />
            ))}
        </div>
    );
}

export default DoctorCards;
