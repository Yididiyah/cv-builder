import React from 'react';

import Card from '../Card/Card'
import './Preview.css';

function Preview({mode, generalInformation, education, workExperience}){
    return (
        <div className='preview'>
        
            <div className='preview-general-information'>
                <h2>{generalInformation.fullName}</h2>
                <h3>{generalInformation.occupation}</h3>
                <h3>{generalInformation.email}</h3>
                <h3>{generalInformation.phone}</h3>
                <h3>{generalInformation.city}</h3>
                <h3>{generalInformation.country}</h3>
            </div>
            <div className='preview-education' >
                <h2>Education</h2>
                {education.map(
                    edu => <Card 
                                key={edu.id}
                                heading={edu.institutionName} 
                                subHeading={edu.qualification}
                                graduationDate={edu.graduationDate}
                                mode={mode}
                                section='education'
                                />
                )}
            </div>
            <div className='preview-work-experience'>
                <h2>Work Experience</h2>
                {workExperience.map(
                    work => <Card 
                                key={work.id}
                                heading={work.companyName} 
                                subHeading={work.role}
                                from={work.from}
                                to={work.to}
                                mode={mode}
                                section='work'
                                />
                )}
            </div>
        </div>
    )
}

export default Preview;

