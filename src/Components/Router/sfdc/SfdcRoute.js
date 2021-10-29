import React from 'react';
import SfdcHeader from './SfdcHeader/SfdcHeader';
import SfdcWhoCanApply from './SfdcWhoCanApply/SfdcWhoCanApply';

const SfdcRoute = () => {
    return (
        <div>
            <SfdcHeader/>
            <SfdcWhoCanApply/>
        </div>
    );
};

export default SfdcRoute;