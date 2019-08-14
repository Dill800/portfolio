import React from 'react'
import {Label} from 'semantic-ui-react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import 'semantic-ui-css/semantic.min.css'
import 'react-vertical-timeline-component/style.min.css';
import './Experiences.css'

const experiences = ( props ) => {
    return(

        <Timeline linecolor={'#ddd'}>
        <TimelineItem
        key="001"
        dateText="May 2019-August 2019"
        dateInnerStyle={{ background:'#333' }}
        style={{ color: '#333' }}
      >
        <h3 id='experienceInfo'><strong>The Home Depot - <i>Software Engineer Intern</i>   
        <emsp/>
        <img
        src={require('../../img/thdround.jpg')}
        class="ui avatar image"
        alt=""
        hspace='10'
        />
        </strong>
        </h3>
        <br/>
        <p>
        I worked on the Online Reporting and Cloud Analytics team to optimize and improve the gross demand metrics dashboard.
        </p>
        
        <p>
        Integrated Natural Language Processing and Generation capabilities into the dashboard to reduce data ambiguity. Restructured the backend, reducing the query time from
        20 minutes to 2 minutes. This increased the dashboard refresh rate by 75%.
        </p>

        <p>Incorporated minute-level data visulazation cabapilities. Business analysts can now track store performance within the hour.
        </p>

      <br/>
        <Label className="ui big label">Python Flask</Label>
        <Label className="ui big label">Google BigQuery</Label>
        <Label className="ui big label">Tableau</Label>
        <Label className="ui big label">Arria (NLG)</Label>

      </TimelineItem>
      </Timeline>

    )
}
export default experiences;