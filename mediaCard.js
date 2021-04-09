import React from 'react';

const MediaCard = (props) => {

    return (<div>
        <h1>{props.title}</h1>
        <p>{props.para}</p>
        <img src={props.image} alt="react" />
    </div>
    )
}

export default MediaCard;