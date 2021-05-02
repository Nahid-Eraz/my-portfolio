import React from 'react';
import './Home.css'
import myImg from '../../img/me.jpg'

const Home = () => {
    return (
        <div className="m-3  text-center">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6 p-5">
                    <img className='img-fluid' src={myImg} alt="" />
                </div>
                <div className="col-md-5">
                    <h1 style={{ color: 'white' }} className="heading-text">- I'm Nahid Eraz</h1>
                    <h1 style={{ color: 'white' }}>Front-End Web Developer</h1>
                    <p> Focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>

                    <div className='d-flex justify-content-evenly'>
                    <div class="buttons">
                        <div class="container">
                            <a href="#" class="btn effect01"><span>Download Resume</span></a>
                        </div>
                    </div>
                    <div class="buttons">
                        <div class="container">
                            <a href="/about" class="btn effect01"><span>More About Me</span></a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;