import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {Image} from 'semantic-ui-react'
import me from '../../img/me.jpg' 
import 'semantic-ui-css/semantic.min.css'

const aboutme = ( props ) => {
    return(
 
        <Container>

            <Row>
            <Col xs={{ size: 5, offset: 1 }}>
            <Image src={me} size='medium' rounded bordered />
            </Col>
            <Col id='bio' xs="6">
            <p>Hello! I'm a sophomore at the University of Florida majoring in <strong>Computer Science</strong> and minoring in <strong>Mathematics</strong> and <strong>Physics</strong>. 
                My passion for physics is just as strong as my passion for computer science - I love <strong>learning about the natural world and solving
                 problems.</strong>
                 </p>
                 <hr/>
                 <p>I was born in New York, but grew up in Florida. My goal is to return back to NY once I finish my undergrad.</p>
                 <hr/>
                 <p>If you have any questions, feel free to ask! My contact information is linked down below.</p>
            </Col>
            </Row>

        </Container>
 
    )
}
export default aboutme;



