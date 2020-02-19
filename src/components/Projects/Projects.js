import React, {useState} from 'react'
import 'semantic-ui-css/semantic.min.css'
import ProjectTile from './projectTile'

const Projects = ( props ) => {

    const [showMore, setShowMore] = useState(false);
    const [buttonText, setButtonText] = useState("Show More");

    const updateShowMore = () => {
        setShowMore(!showMore);
        if(!showMore) {
            setButtonText("Show Less");
        }
        else {
            setButtonText("Show More");
        }
    }

    const hiddenFunctions = () => {
        return (
            <React.Fragment>
            <ProjectTile image='gnats'/>
            <ProjectTile image='gnats'/>
            <ProjectTile image='gnats'/>
            <ProjectTile image='gnats'/>
            <ProjectTile image='gnats'/>
            <ProjectTile image='gnats'/>
            <ProjectTile image='gnats'/>
            <ProjectTile image='gnats'/>
            </React.Fragment>
        )
    }

    return(

        <div>
        <div className='projects'>
                        <ProjectTile image='mergium' title='Mergium'>
                            <p>Project I made senior year of high school.</p>
                            <p>I always thought it would be cool to combine Pokémon back when I was younger. So, I decided to make it a reality. Mergium is basically Pokémon but instead of evolving you get to merge the creatures instead. Only one person has beaten it so far (and no, it isn't me).</p>
                        </ProjectTile>
                        
                        <ProjectTile image='gnats' title="GNATS">
                            <p>
                            Inspired by CodeBullet's <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/watch?v=BOZfhUcNiqk">Youtube video</a>.
                            </p>
                            
                            <p>
                            I decided to create my own implementation of the genetic algorithm explained in the video above. The concept of programmed objects
                            evolving similar to biological evolution intrigued me.
                            </p>
                        </ProjectTile>

                        <ProjectTile image='eulerfluid' title="Euler Fluid">
                            <p>
                            Program based on this <a rel="noopener noreferrer" target="_blank" href="https://pdfs.semanticscholar.org/847f/819a4ea14bd789aca8bc88e85e906cfc657c.pdf">physics paper</a>.
                            </p>
                            
                            <p>
                            I was up late one night browsing the r/Physics subreddit when I stumbled upon this paper. I figured it'd be a cool challenge
                            to try and program it myself using the SFML library I recently learned about from my programming class. Learned a lot about 
                            fluid mechanics when making this one.
                            </p>
                        </ProjectTile>

                        {showMore && hiddenFunctions()}
                       
        </div>
            <div className="button-container">
                <button className='show-more-button' onClick={updateShowMore}>{buttonText}</button>
                </div>
        </div>


    )
}
export default Projects;