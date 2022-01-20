import React from 'react';

function About(props){
return(
    <aside>
        <img src={props.image} image="https://via.placeholder.com/215" alt="blog logo" ></img>
        <p>{props.sentence}</p>
    </aside>
)
}

export default About;