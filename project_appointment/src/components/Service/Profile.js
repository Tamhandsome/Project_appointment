import React, { useState } from 'react';
import '../../styles/Profile.scss';

const PatientProfile = ({ patient, onDelete }) => {
    return (
        <div className="patient-profile">
            <h2>{patient.name}</h2>
            <p><strong>Date of birth:</strong> {patient.dob}</p>
            <p><strong>Phone number:</strong> {patient.phone}</p>
            <p><strong>Address:</strong> {patient.address}</p>
            <div className="buttons">
                <button className="delete" onClick={() => onDelete(patient.id)}>Delete</button>
                <button className="edit">Edit</button>
                <button className="next">Next</button>
            </div>
        </div>
    );
};

const Profile = () => {
    const [patients, setPatients] = useState([
        {
            id: 1,
            name: 'TRẦN VĂN TÂM',
            dob: '02/04/2003',
            phone: '0987666666',
            address: 'Ngõ 206, đường Thanh Bình, Phường Mộ Lao, Quận Hà Đông, Thành phố Hà Nội'
        },
        {
            id: 2,
            name: 'TRẦN VĂN TÂM',
            dob: '02/04/2003',
            phone: '0987666666',
            address: 'Ngõ 206, đường Thanh Bình, Phường Mộ Lao, Quận Hà Đông, Thành phố Hà Nội'
        }
    ]);

    const handleDelete = (id) => {
        setPatients(patients.filter(patient => patient.id !== id));
    };

    return (
        <div className="profile">
            <h1>Select Patient Profile</h1>
            {patients.map(patient => (
                <PatientProfile key={patient.id} patient={patient} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default Profile;
