import React from 'react'
import {Container, Item, Label, Divider} from 'semantic-ui-react'
import HomeDepot from '../../img/homedepot2.jpg'
import Effect from 'react-reveal/Slide'
import 'semantic-ui-css/semantic.min.css'
 
const experiences = ( props ) => {
    return(

        <Container>

        <Item.Group id='experienceInfo' divided>

        <Item>
        
        <Item.Image src={HomeDepot} size='medium' centered/>
        
            <Item.Content>
            <Item.Header className="ui large header" style={{ color: "black" }}>
                The Home Depot - Software Engineer Intern
            </Item.Header>
            <Item.Meta style={{ color: "white" }}>
                <p>May 2019 - August 2019</p>
            </Item.Meta>
            <Item.Description style={{ color: "white" }}>
                
                <p>
                Worked on the Online Reporting and Cloud Analytics team to optimize the gross demand metrics dashboard.
                </p>
                
                <p>
                Integrated Natural Language Processing and Generation capabilities into the dashboard. Reduced backend query time by 80% and increased dashbaord 
                update frequency from 1 hour to 15 minutes. Allowed users to view changes of all Home Depot stores down to the minute grain.
                </p>
            </Item.Description>
            <Item.Extra>
                
                <Label className="ui large label">Python Flask</Label>
                <Label className="ui large label">Google BigQuery</Label>
                <Label className="ui large label">Tableau</Label>
                <Label className="ui large label">Arria</Label>
                
            </Item.Extra>
            </Item.Content>
        </Item>

        </Item.Group>

        </Container>

    )
}
export default experiences;