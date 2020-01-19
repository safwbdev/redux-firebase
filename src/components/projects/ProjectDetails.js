import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ligula non placerat feugiat. Ut id lacus nisi. Etiam et diam ligula. Suspendisse venenatis iaculis nulla vitae fringilla. Quisque consectetur mauris in tellus dictum, et feugiat diam pulvinar. Praesent pretium porta lacinia. Vivamus vel aliquet ante, eget semper metus. Maecenas diam enim, cursus in tincidunt vitae, malesuada vehicula eros. Integer dictum consectetur urna id lobortis. Maecenas mi lectus, aliquet sit amet ante quis, varius aliquam dui.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Stefaan</div>
                    <div>18 January 2020</div>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetails