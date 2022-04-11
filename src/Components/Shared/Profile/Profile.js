import React from 'react';
import { useParams } from 'react-router-dom';
import './Profile.scss';
import ProfileInputs from './ProfileInputs/ProfileInputs';

const Profile = () => {
    const { id } = useParams()

    return (
        <section className='profile-container'>
            <p>{id}</p>
            <ProfileInputs/>
        </section>
    );
};

export default Profile;