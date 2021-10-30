import React from 'react';
import SfdcAwards from './SfdcAwards/SfdcAwards';
import SfdcCategory from './SfdcCategory/SfdcCategory';
import SfdcHeader from './SfdcHeader/SfdcHeader';
import SfdcWhoCanApply from './SfdcWhoCanApply/SfdcWhoCanApply';

const SfdcRoute = () => {
    return (
        <div>
            <SfdcHeader/>
            <SfdcWhoCanApply/>
            <SfdcCategory/>
            <SfdcAwards/>
        </div>
    );
};

export default SfdcRoute;