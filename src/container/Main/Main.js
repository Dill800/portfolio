import React, {Component} from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Section from '../../components/Section/Section'
import Typist from 'react-typist'
import './Main.css'

class Main extends Component{

    state = {}

    render() {

        return (
            
            <div className='App'>
                 <NavBar/>
            <div id='welcomepage'>
                <div id='welcomepage-overlay'>
                <Section className="whiteheader" dark={false} id="home">

                    <Typist>
                    <h1>Hi, I'm Dillon McGovern</h1>
                    <Typist.Delay ms={500}/>
                        <i>Computer Science Student</i>
                    </Typist>
                    
                </Section>
                
                </div>
            </div>

            <Section dark={true} id='aboutme' title='About Me'>
                <p>Some information about myself</p>
            </Section>

            <Section dark={false} id='experience' title='Experience'>
                <p>My experience</p>
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