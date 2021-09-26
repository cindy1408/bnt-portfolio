import React from 'react';
import './Languages.css';
import html from '../resources/html.png';
import css from '../resources/css.png';
import js from '../resources/js.png';
import java from '../resources/java.png';
import react from '../resources/react.png';

export default function Languages() {
    return (
        <div id="languages" className="container-fluid languages">
            <div className="row">
                <div className="col-sm-2" align='center'>
                    <img src={html} className="card-img-top" />
                    <h4>HTML</h4>
                </div>
                <div className="col-sm-2" align='center'>
                    <img src={css} className="card-img-top" />
                    <h4>CSS</h4>
                </div>
                <div className="col-sm-2" align='center'>
                    <img src={js} className="card-img-top" />
                    <h4>JavaScript</h4>
                </div>
                <div className="col-sm-2" align='center'>
                    <img src={java} className="card-img-top" />
                    <h4>Java</h4>
                </div>
                <div className="col-sm-2" align='center'>
                    <img src={react} className="card-img-top" />
                    <h4>React</h4>
                </div>
            </div>
        </div>
    )
}
