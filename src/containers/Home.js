import React, {Component} from 'react';
import './Home.css'
import Section from '../components/Section/section.js'
import Projects from '../components/Projects/Projects.js'
import AboutMe from '../components/AboutMe/aboutme'
import NavBar from '../components/NavBar/NavBar'
import Experience from '../components/Experience/experience'
import MailIcon from '../img/mail.png'
import GitIcon from '../img/GITHUB.png'
import LinkedinIcon from '../img/linkedin.png'

class Home extends Component {
    state = {}
    render() { 
        return (
        <div>
            
            {/* Landing Page Design */}
            <div className='background-container'>
                <NavBar/>
                <div className='background-image'></div>
                
                <div className='nameContainer'>
                    <span className='name'>Hi, I'm Dillon McGovern.</span>
                    <span className='title'>Computer Science Student</span>
                </div>

                <div className='contact-icons'>
                <a target='_blank' href='https://www.linkedin.com/in/dillon-mcgovern/' ><img className = 'icon linkedin-icon' src={LinkedinIcon}></img></a>
                <a target="_blank" href="mailto:dillonm800@gmail.com"><img className = 'icon mail-icon' src={MailIcon}></img></a>
                <a target="_blank" href="https://github.com/Dill800"><img target="_blank" href="https://github.com/Dill800" className = 'icon git-icon' src={GitIcon}></img></a>
                </div>
            </div>
            
            {/* About Me Section*/}
            <div id='aboutme'>
                <Section title='About Me' image='p1'>
                    <AboutMe/>
                </Section>
            </div>

            {/* Experience Section*/}
            <div id='experience'>
                <Section title='Experience' image='p2'>
                    <Experience/>
                </Section>
            </div>

            {/* Projects Section*/}
            <div id='projects'>
                <Section title='Projects' image='p3'>
                    <Projects/>
                </Section>
            </div>

        </div>
        );
    }
}
 
export default Home;