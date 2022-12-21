import React from 'react';
import Banner from './Banner';
import Civils from './Civils';
import ConstructionWorks from './ConstructionWorks';
import ConsultanclyWorks from './ConsultanclyWorks';
import Renovations from './Renovations';

const Services = () => {
    return (
        <div>
            <Banner />
            <ConstructionWorks />
            <Renovations />
            <Civils />
            <ConsultanclyWorks />
        </div>
    );
};

export default Services;
