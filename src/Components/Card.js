import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div class="card" styles="width: 18rem;">
            <img src={props.imageSrc} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5>{props.title}</h5>
                <p class="card-text">{props.text}</p>
                <a href="#" class="btn btn-primary">{props.buttonText}</a>
            </div>
        </div>
    )
}

export default Card
