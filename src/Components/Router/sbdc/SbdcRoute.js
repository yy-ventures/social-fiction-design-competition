import React from 'react';
import SbdcFaq from './SbdcFaq/SbdcFaq';
import SbdcForm from './SbdcForm/SbdcForm';
import SbdcHeader from './SbdcHeader/SbdcHeader';
import SbdcReward from './SbdcReward/SbdcReward';
import SbdcSubmitIdea from './SbdcSubmitIdea/SbdcSubmitIdea';
import SbdcTimeline from './SbdcTimeline/SbdcTimeline';
import SbdcTrack from './SbdcTrack/SbdcTrack';
import SbdcWhoCanApply from './SbdcWhoCanApply/SbdcWhoCanApply';

const SbdcRoute = () => {
    return (
        <div>
            <SbdcHeader/>
            <SbdcWhoCanApply/>
            <SbdcTrack/>
            <SbdcTimeline/>
            <SbdcReward/>
            <SbdcSubmitIdea/>
            <SbdcFaq/>
            <SbdcForm/>
        </div>
    );
};

export default SbdcRoute;