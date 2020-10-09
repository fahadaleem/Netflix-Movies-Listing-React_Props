import React from "react";

function Card(prop){

    const {img,title, description} = prop;

    return (
        <div className="card">
        <img src={img} className="img" />
        <h2 className="title">{title}</h2>
        <p className="description">{!description?"Description Not Specified":description}</p>
        </div>
    )
}


export default Card;