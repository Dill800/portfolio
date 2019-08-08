import React from 'react'
import {Container, Item, Label} from 'semantic-ui-react'
import Mergium from '../../img/mergium.gif'
import Fluid from '../../img/eulerfluid.gif'
import Gnats from '../../img/gnats.gif'
import 'semantic-ui-css/semantic.min.css'
import './Projects.css'
 
const projects = ( props ) => {
    return(

        <Container>

        <Item.Group id='projectInfo' divided>

        

        <Item>
        
        <Item.Image as='a' src={Mergium} size='medium' target="_blank"
        href='https://github.com/Dill800/senior-project-mergium' rounded centered/>
        
            <Item.Content>
            <Item.Header className="ui large header" style={{ color: "lightblue" }}>
                Mergium
            </Item.Header>
            <br/>
            <Item.Description style={{ color: "white" }}>
                
                <p>
                Project I made senior year of high school.
                </p>
                
                <p>
                I always thought it would be cool to combine Pokemon back when I was younger. So, I decided to make it a reality. Mergium 
                is basically Pokemon but instead of evolving you get to merge the creatures instead. Only one person has beaten it so far (and no, it isn't me).
                </p>
            </Item.Description>
            <Item.Extra>
                
                <Label className="ui large label">Java</Label>
                <Label className="ui large label">JavaFX</Label>
                
            </Item.Extra>
            </Item.Content>
        </Item>





        <Item>
        
        <Item.Image as='a' src={Fluid} size='medium' target="_blank"
        href='https://github.com/Dill800/euler-fluid' rounded/>
        
            <Item.Content>
            <Item.Header className="ui large header" style={{ color: "lightblue" }}>
                Euler Fluid
            </Item.Header>
            <br/>
            <Item.Description style={{ color: "white" }}>
                
                <p>
                Program based on this <a rel="noopener noreferrer" target="_blank" href="https://pdfs.semanticscholar.org/847f/819a4ea14bd789aca8bc88e85e906cfc657c.pdf">physics paper</a>.
                </p>
                
                <p>
                I was up late one night browsing the r/Physics subreddit when I stumbled upon this paper. I figured it'd be a cool challenge
                to try and program it myself using the SFML library I recently learned about from my programming class. Learned a lot about 
                fluid mechanics when making this one.
                </p>
            </Item.Description>
            <Item.Extra>
                
                <Label className="ui large label">C++</Label>
                <Label className="ui large label">SFML</Label>
                
            </Item.Extra>
            </Item.Content>
        </Item>


        <Item>
        
        <Item.Image as='a' src={Gnats} size='medium' target="_blank"
        href='https://github.com/Dill800/GNATS' centered/>
        
            <Item.Content>
            <Item.Header className="ui large header" style={{ color: "lightblue" }}>
                GNATS
            </Item.Header>
            <Item.Meta style={{ color: "white" }}>
                <p>GeNetic Algorithm Training Software</p>
            </Item.Meta>
            <Item.Description style={{ color: "white" }}>
                
                <p>
                Inspired by CodeBullet's <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=BOZfhUcNiqk">Youtube video</a>.
                </p>
                
                <p>
                I decided to create my own implementation of the genetic algorithm explained in the video above. The concept of programmed objects
                 evolving similar to biological evolution intrigued me.
                </p>
            </Item.Description>
            <Item.Extra>
                
                <Label className="ui large label">C++</Label>
                <Label className="ui large label">SFML</Label>
                
            </Item.Extra>
            </Item.Content>
        </Item>






        </Item.Group>

        </Container>

    )
}
export default projects;