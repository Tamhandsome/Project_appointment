import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../../styles/DoctorCard.scss';
import logo from '../../assets/images/Logo.png';
function DoctorCard({ onBookingClick }) {
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
                <p>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                <div className="doctor-card__action">
                    <img src={logo} alt="Doctor" className="doctor-card__image" />
                    <button className="btn" onClick={onBookingClick} >Booking</button>
                </div>
            </div>
        </div>


    );

}
function DoctorCards({ onBookingClick }) {
    const doctors = [
        { id: 1, name: "Dr. Smith", image: logo },
        { id: 2, name: "Dr. Jones", image: logo },
        { id: 3, name: "Dr. Taylor", image: logo },
    ];

    return (
        <div className="doctor-cards">
            {doctors.map(doctor => (
                <DoctorCard key={doctor.id} onBookingClick={onBookingClick} />
            ))}
        </div>
    );
}


export default DoctorCards;
