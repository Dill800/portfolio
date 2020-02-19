import React, { Component } from 'react';
import './projectTile.css'

const ProjectTile = (props) => {
    return (
        <div className='tile'>
            <div className={props.image}>
                <div className='cover'>
                    <div className='project-title'>
                        <p>{props.title}</p>
                    </div>
                    <div className='project-desc'>
                        {props.children}
                    </div>
                </div>
            </div>
            
        </div>
    );
}
 
export default ProjectTile;