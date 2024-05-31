import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../../styles/DoctorCard.scss';
import logo from '../../assets/images/Logo.png';
function DoctorCard({ doctorname, specialty, info, onBookingClick }) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className="doctor-card">
            <div className="doctor-card__info">
                {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <label>
                            <input type='radio'
                                name='rating'
                                value={currentRating}
                                onClick={() => setRating(currentRating)}
                            />
                            <FaStar
                                className='star'
                                size={20}
                                color={currentRating <= (hover || rating) ? "#F3CD03" : "#e4e5e9"}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    );
                })}
                <p className='doctor-name'>{doctorname} - {specialty}</p>
                <p>{info}</p>
                <div className="doctor-card__action">
                    <img src={logo} alt="Doctor" className="doctor-card__image" />
                    <button className="btn" onClick={onBookingClick} >Booking</button>
                </div>
            </div>
        </div>

    );

}
function DoctorCards({ selectedSpecialty, onBookingClick }) {
    const doctors = [
        { id: 1, doctorname: "Dr. Smith", specialty: 'DERMATOLOGY', image: logo, info: "Slate helps you see how many more days you need to work to reach your financial goal." },
        { id: 2, doctorname: "Dr. Jones", specialty: 'DERMATOLOGY', image: logo, info: "Slate helps you see how many more days you need to work to reach your financial goal." },
        { id: 3, doctorname: "Dr. Taylor", specialty: 'TRAUMATOLOGY', image: logo, info: "Slate helps you see how many more days you need to work to reach your financial goal." },
        { id: 4, doctorname: "Dr. Brown", specialty: 'TRAUMATOLOGY', image: logo, info: "Slate helps you see how many more days you need to work to reach your financial goal." },
        { id: 5, doctorname: "Dr. Davis", specialty: 'NEUROLOGY', image: logo, info: "Slate helps you see how many more days you need to work to reach your financial goal." },
        { id: 6, doctorname: "Dr. Miller", specialty: 'Odontology', image: logo, info: "Slate helps you see how many more days you need to work to reach your financial goal." },
        { id: 7, doctorname: "Dr. Jones", specialty: 'DERMATOLOGY', image: logo, info: "Slate helps you see how many more days you need to work to reach your financial goal." },
        { id: 8, doctorname: "Dr. Jones", specialty: 'DERMATOLOGY', image: logo, info: "Slate helps you see how many more days you need to work to reach your financial goal." },
    ];
    const filteredDoctors = selectedSpecialty ? doctors.filter(doctor => doctor.specialty === selectedSpecialty.spname) : [];
    return (
        <div className="doctor-cards">
            {filteredDoctors.map(doctor => (
                <DoctorCard
                    key={doctor.id}
                    doctorname={doctor.doctorname}
                    specialty={doctor.specialty}
                    info={doctor.info}
                    onBookingClick={onBookingClick}
                />
            ))}
        </div>
    );
}


export default DoctorCards;
