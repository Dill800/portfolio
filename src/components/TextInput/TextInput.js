import React from 'react'
 
const textinput = ( props ) => {
    return(
        <div className="text-input-container" style={{display: 'inline-block', margin: '0px', padding: '5px'}}>
            <input name='Hello' onChange={props.textInputFunction} type="text" id={props.id}/>
            <label > {props.label} </label>
        </div>
        
        
    )
}
export default textinput;