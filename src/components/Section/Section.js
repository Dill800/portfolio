import React from 'react'
import MainEffect from 'react-reveal/Zoom'

const section = ( props ) => {
    return(

        <div className={"section" + (props.dark ? " section-dark" : " section-gold")}>

            <div className={"section-content " + props.className} id={props.id}>
                <MainEffect>
                    <h1><strong>{props.title}</strong></h1>
                </MainEffect>

                <br/><br/>

                <p>{props.children}</p>
            </div>
        </div>
 
    )
}
export default section;