import React from 'react';
import SbdcForm from './SbdcForm/SbdcForm';
import SbdcHeader from './SbdcHeader/SbdcHeader';
import SbdcSubmitIdea from './SbdcSubmitIdea/SbdcSubmitIdea';
import SbdcTrack from './SbdcTrack/SbdcTrack';
import SbdcWhoCanApply from './SbdcWhoCanApply/SbdcWhoCanApply';

const SbdcRoute = () => {
    return (
        <div>
            <SbdcHeader/>
            <SbdcWhoCanApply/>
            <SbdcTrack/>
            <SbdcSubmitIdea/>
            <SbdcForm/>
        </div>
    );
};

export default SbdcRoute;