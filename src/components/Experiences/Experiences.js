import React from 'react'
import {Container, Item, Label, Divider} from 'semantic-ui-react'
import HomeDepot from '../../img/homedepot.jpg'
import Effect from 'react-reveal/Slide'
import 'semantic-ui-css/semantic.min.css'
 
const experiences = ( props ) => {
    return(
 
        

        <Container>

        <Item.Group id='experienceInfo' divided>

        <Item>
        
        <Item.Image src={HomeDepot} size='medium' class="ui medium bordered image"/>
        


            <Item.Content>
            <Item.Header style={{ color: "white" }}>
                The Home Depot - Software Engineer Intern
            </Item.Header>
            <Item.Meta style={{ color: "white" }}>
                <span>May 2019 - August 2019</span>
            </Item.Meta>
            <Item.Description style={{ color: "white" }}>
                <p className="bio-text">
                Worked on the Online Reporting and Cloud Analytics team to optimize the gross demand metrics dashboard.
                </p>
                <p className="bio-text">
                Integrated Natural Language Processing and Generation capabilities into the dashboard. Reduced backend query time by 80% and increased dashbaord 
                update frequency from 1 hour to 15 minutes. Allowed users to view changes of all Home Depot stores down to the minute grain.
                </p>
            </Item.Description>
            <Item.Extra>
                <Label>Python Flask</Label>
                <Label>Google BigQuery</Label>
                <Label>Tableau</Label>
                <Label>Arria</Label>
            </Item.Extra>
            </Item.Content>
        </Item>

        </Item.Group>

        </Container>

    )
}
export default experiences;