import React, { Component } from 'react';
import './section.css'

const Section = (props) => {

    

    return ( 

        <div className='section' >
                <div className='section-title'>
                    <span>{props.title}</span>
                </div>
                <div className='section-content'>
                    <div className={props.image}></div>
                    {props.children}
                </div>
        </div>

     );
}
 
export default Section;