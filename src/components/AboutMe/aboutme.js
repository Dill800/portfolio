import React, { Component } from 'react';
import './aboutme.css'
import me from '../../img/me.jpg'

const AboutMe = (props) => {
    return (
        <div className='aboutme-container'>

            <div className='image-container'>
                <img src={me} className='pic'></img>
            </div>
            
            <div className='bio-container'>
                <div className='bio-text'>
                    <p>Hello! I'm a sophomore at the University of Florida majoring in <strong>Computer Science</strong> and 
                        minoring in <strong>Mathematics</strong> and <strong>Physics</strong>. My passion for physics is just as strong as my passion for
                        computer science - I love <strong>learning about the natural world and solving problems</strong>.
                    </p>
                    <hr className='bio-bar'/>
                    <p>Currently, I'm searching for <strong>Software Engineering internship</strong> positions throughout the United States.</p>
                    <hr className='bio-bar bio-content'/>
                    <p className='bio-content'>If you have any questions, feel free to ask! My contact information is linked down below.</p>
                </div>
            </div>
            
        </div>
    );
}
 
export default AboutMe;