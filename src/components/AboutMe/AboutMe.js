import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {Grid, Image} from 'semantic-ui-react'
import me from '../../img/hqdefault.jpg' 
import 'semantic-ui-css/semantic.min.css'

const aboutme = ( props ) => {
    return(
 
        <Container>

            <Row>
            <Col xs={{ size: 5, offset: 1 }}>
            <Image src={me} size='medium' circular floated />
            </Col>
            <Col id='bio' xs="6">
            <p>Hello! I'm Dillon, an aspiring Software Engineer currently attending the University of Florida.
                       I'm getting a Bachelors of Science in Computer Science, alongside minors in Mathematics and Physics. I
                       love learning more about the natural world and solving problems.
                 </p>
                 <hr/>
                 <p>I was born in New York. My dream is to return back to NY right out of college.</p>
            </Col>
            </Row>

        </Container>

        // <Grid >



        //     <Grid.Column width = "8">
        //         <Image src={me} size='medium' circular floated />
        //     </Grid.Column>


        //     <Grid.Column id='bio' width = "8">
        //         <p>Hello! I'm Dillon, an aspiring Software Engineer currently attending the University of Florida.
        //               I'm getting a Bachelors of Science in Computer Science, alongside minors in Mathematics and Physics. I 
        //               love 
        //               Hello! I'm Dillon, an aspiring Software Engineer currently attending the University of Florida.
        //               I'm getting a Bachelors of Science in Computer Science, alongside minors in Mathematics and Physics. I 
        //               love 
        //               Hello! I'm Dillon, an aspiring Software Engineer currently attending the University of Florida.
        //               I'm getting a Bachelors of Science in Computer Science, alongside minors in Mathematics and Physics. I 
        //               love 
        //         </p>
        //     </Grid.Column>


        

        // </Grid>

 
    )
}
export default aboutme;



