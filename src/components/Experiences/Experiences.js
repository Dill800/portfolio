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
        Worked on the Online Reporting and Cloud Analytics team to optimize the gross demand metrics dashboard.
        </p>
        
        <p>
        Integrated Natural Language Processing and Generation capabilities into the dashboard. Reduced backend query time by 80% and increased dashbaord 
        update frequency from 1 hour to 15 minutes. Allowed users to view changes of all Home Depot stores down to the minute grain.
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