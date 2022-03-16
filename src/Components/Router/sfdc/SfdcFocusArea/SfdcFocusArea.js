import React from 'react';
import './SfdcFocusArea.scss';
import area1 from '../../../../assets/area_1.png'
import area2 from '../../../../assets/area_2.png'
import area3 from '../../../../assets/area_3.png'
import { Link } from 'react-router-dom';

const SfdcFocusArea = () => {
    return (
        <section className='focus_area_container'>
            <div className='area_1'>
                <img src={area1} alt="area1" />
            </div>
            <div className='area_2'>
                <img src={area2} alt="area2" />
            </div>
            <div className='area_3'>
                <img src={area3} alt="area3" />
                <Link to="/sfdc-registration">apply now</Link>
            </div>
        </section>
    );
};

export default SfdcFocusArea;