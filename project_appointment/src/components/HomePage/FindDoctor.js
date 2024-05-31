import React from 'react';
import '../../styles/FindDoctor.scss';

const FindDoctor = () => {
    return (
        <section className="find-doctor">
            <h2>Find A Doctor</h2>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Speciality" />
                <label class="checkbox">
                    Available
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                </label>
                <button type="submit">Search</button>
            </form>
        </section>
    );
};

export default FindDoctor;
