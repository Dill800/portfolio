import React, {Component} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Section from '../../components/Section/Section'
import AboutMe from '../../components/AboutMe/AboutMe'
import Experience from '../../components/Experiences/Experiences'
import Effect from 'react-reveal/Fade'
import './Main.css'

class Main extends Component{

    state = {}

    render() {

        return (
            
            <div className='App'>
                 <NavBar/>
            <div id='welcomepage'>
                <div id='welcomepage-overlay'>
                
                    <div id='titleHeader'>
                    <Effect top cascade duration="1500">
                    <p>Hi, I'm Dillon McGovern.</p>
                    <hr/>
                    </Effect>
                    
                    <Effect delay="1500">
                    <h4><i>Computer Science Student</i></h4>
                    </Effect>
                    

                    </div>

                </div>
            </div>

            <Section dark={true} id='aboutme' title='About Me'>
                <AboutMe/>
                <br/><br/><br/>
            </Section>

            <Section dark={false} id='experience' title='Experience'>
                <Effect>
                <Experience/>
                </Effect>
                <br/><br/><br/>
            </Section>

            <Section dark={true} id='projects' title='Projects'>
                <p>My Projects</p>
            </Section>

            <Section dark={false} id='contact' title='Contact'>
                <p>Contact Info</p>
            </Section>

            </div>
        );
        
    };

}

export default Main;