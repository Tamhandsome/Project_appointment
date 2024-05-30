import React, { useState } from 'react';
import '../../styles/Specialist.scss';

const specialties = [
    { name: 'DERMATOLOGY', description: 'Specializing in skin, hair, nail, and mucous membrane disorders' },
    { name: 'TRAUMATOLOGY', description: 'Focuses on the diagnosis and treatment of injuries, particularly those involving the musculoskeletal system' },
    { name: 'NEUROLOGY', description: 'Deals with the diagnosis and treatment of disorders affecting the nervous system, including the brain, spinal cord, and nerves' },
    { name: 'Odontology', description: 'Specializes in the diagnosis, prevention, and treatment of oral diseases and conditions related to the teeth, gums, and mouth' },
];

const SpecialtySelection = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredSpecialties = specialties.filter(specialty =>
        specialty.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
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
                    <div key={index} className="specialty-item">
                        <h3>{specialty.name}</h3>
                        <p>{specialty.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialtySelection;
