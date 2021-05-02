import React from 'react';
import Bio from './AboutComponents/Bio';
import Qualification from './AboutComponents/Qualification';
import Skills from './AboutComponents/Skills';

const About = () => {
    return (
        <div>
            <h1 className='text-center'>About Me</h1>
            <Bio></Bio>
            <Skills></Skills>
            <Qualification></Qualification>
        </div>
    );
};

export default About;