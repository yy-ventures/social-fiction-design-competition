import React from 'react';
import SfdcAwards from './SfdcAwards/SfdcAwards';
import SfdcCategory from './SfdcCategory/SfdcCategory';
import SfdcForm from './SfdcForm/SfdcForm';
import SfdcHeader from './SfdcHeader/SfdcHeader';
import SfdcSubmitIdea from './SfdcSubmitIdea/SfdcSubmitIdea';
import SfdcTimeline from './SfdcTimeline/SfdcTimeline';
import SfdcWhoCanApply from './SfdcWhoCanApply/SfdcWhoCanApply';

const SfdcRoute = () => {
    return (
        <div>
            <SfdcHeader/>
            <SfdcWhoCanApply/>
            <SfdcCategory/>
            <SfdcTimeline/>
            <SfdcAwards/>
            <SfdcSubmitIdea/>
            <SfdcForm/>
        </div>
    );
};

export default SfdcRoute;