import React from 'react';

function About(props){
    const {image, about} = props;
return(
    <aside>
        <img src={image ? image :"https://via.placeholder.com/215"} alt="blog logo" ></img>
        <p>{about}</p>
    </aside>
)
}

export default About;