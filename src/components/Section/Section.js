import React from 'react'
import MainEffect from 'react-reveal/Zoom'

const section = ( props ) => {
    return(

        <div className={"section" + (props.dark ? " section-dark" : "")}>
            <div className={"section-content " + props.className} id={props.id}>


                <MainEffect>
                    <h1>{props.title}</h1>
                </MainEffect>



                <p>{props.children}</p>
            </div>
        </div>
 
    )
}
export default section;

// import React, {Component} from 'react';
// import handleVisibility from '../utils/handleVisibility' 

// class section extends Component{

//     constructor(props) {
//         super(props);

//         this.handleVisibility = handleVisibility.bind(this)
//     }

//     render() {
//         return (
//         <div className={"section" + (this.props.dark ? " section-dark" : "")}>
//              <div className={"section-content " + this.props.className} id={this.props.id}>
//                  <Visibility onUpdate={this.handleVisibility}>
//                     <Transition animation='fade right' duration={1000} visible = {true}>
//                     <h1>{this.props.title}</h1>
//                     </Transition>
//                  </Visibility>
//                  <p>{this.props.children}</p>
//              </div>
//          </div>    
//         );
//     };
// }
// export default section;