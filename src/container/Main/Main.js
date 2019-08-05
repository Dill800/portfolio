import React, {Component} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Section from '../../components/Section/Section'
import AboutMe from '../../components/AboutMe/AboutMe'
import Experience from '../../components/Experiences/Experiences'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'
import Effect from 'react-reveal/Fade'
import Effect2 from 'react-reveal/LightSpeed'
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
                <Effect>
                <AboutMe/>
                <br/><br/><br/>
                </Effect>
                
            </Section>

            <Section dark={false} id='experience' title='Experience'>
                <Effect>
                <Experience/>
                </Effect>
                <br/><br/><br/>
            </Section>

            <Section dark={true} id='projects' title='Projects'>
                <Effect duration='2500'>
                <Projects/>
                </Effect>
            </Section>

            <Section dark={false} id='contact' title='Contact'>
                <Contact/>
            </Section>

            </div>
        );
        
    };

}

export default Main;