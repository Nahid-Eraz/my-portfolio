import React from 'react';
import './Home.css'
import myImg from '../../img/me.jpg'

const Home = () => {
    return (
        <div className="m-3">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6">
                    <img className='img-fluid' src={myImg} alt="" />
                </div>
                <div className="col-md-4">
                    <h1 className="heading-text">- I'm Nahid Eraz</h1>
                    <h1>Front-End Web Developer</h1>
                    <p> Focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;