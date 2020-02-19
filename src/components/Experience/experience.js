import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './experience.css'

const Experience = (props) => {

    return (
    <div className = 'timeline-container'>

                            
        <VerticalTimeline layout={'1-column'}>
            
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(223, 190, 115)'}}
                contentStyle={{background: 'rgb(30,30,30)', opacity: .9, color: 'rgb(255,255,255)'}}
            >
                <h1 className="vertical-timeline-element-title">The Home Depot</h1>
                <h3 className="vertical-timeline-element-subtitle"><i>Software Engineer Intern (May-Aug 2019)</i></h3>
                <div className='experience-block'>
                    <span>
                    I worked on the Online Reporting and Cloud Analytics team to optimize and improve the gross demand metrics dashboard.
                    </span>
                    <br/><br/>
                    <span>
                    Integrated Natural Language Processing and Generation capabilities into the dashboard to reduce data ambiguity. Restructured the backend, reducing the query time from
                    20 minutes to 2 minutes. This increased the dashboard refresh rate by 75%.
                    </span>
                    <br/><br/>
                    <span>Incorporated minute-level data visulazation capabilities. Business analysts can now track store performance within the hour.
                    </span>
                    <br/><br/>
                    <span>Tech Stack: Python Flask, Google BigQuery, Tableau, Arria (NLG)
                    </span>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(223, 190, 115)'}}
                contentStyle={{background: 'rgb(30,30,30)', opacity: .9, color: 'rgb(255,255,255)'}}
            >
                
                <h1 className="vertical-timeline-element-title">University of Florida - GILM Lab</h1>
                <h3 className="vertical-timeline-element-subtitle"><i>Undergraduate Researcher (Sept 2019 - Present)</i></h3>
                <div className='experience-block'>
                    <span>
                    Apply physically-based mutli-spectral algorithms to model the wavelength dependent behavior of complex materials
                    </span>
                    <br/><br/>
                    <span>
                    Use observations of the emission and absorption spectra of materials to analyze their nano-scale structures
                    </span>
                    <br/><br/>
                    <span>Implement a material matching algorithm to identify different material compositions
                    </span>
                    
                </div>
            </VerticalTimelineElement>
        
        </VerticalTimeline> 
    </div>
    )
}

export default Experience;