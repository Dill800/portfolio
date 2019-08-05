import React from 'react'
import {Image} from 'semantic-ui-react' 
import LinkedIn from '../../img/linkedin.png'
import Mail from '../../img/mail.png'
import {Container, Row, Col} from 'reactstrap'
import Github from '../../img/github.gif'

const contact = ( props ) => {
    return(
        
         

         <Container>

            <Row>
            <Col  xs="4">
            <Image as='a'
        href='https://www.linkedin.com/in/dillon-mcgovern-53334b168/'   src={LinkedIn} rounded size='mini' floated />
            </Col>
            <Col xs="4">
            <Image as='a'
        href='"mailto:dillonm800@gmail.com"'   src={Mail} size='mini' rounded floated />

        
            </Col>
            <Col xs="4">
            <Image as='a'
        href='https://github.com/Dill800'   src={Github} size='mini' rounded floated />

        
            </Col>

            </Row>

        </Container>
         
 
    )
}
export default contact;