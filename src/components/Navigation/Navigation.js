import React from 'react';
import './Navigation.css'
import Typical from 'react-typical'
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import Snowfall from 'react-snowfall'


const Navigation = () => {
    return (
        <div className="header-bg">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <h2 class="navbar-brand" href="#">SHOWRAV.</h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="ms-auto navbar-nav mt-4">

                            <li className="nav-item mx-2">
                                <a className="nav-link active" href="#home">HOME</a>
                            </li>


                            <li className="nav-item mx-2">
                                <a className="nav-link active" aria-current="page" href="#features">FEATURES</a>
                            </li>

                            <li className="nav-item mx-2">
                                <a className="nav-link active" href="#project">PORTFOLIO</a>
                            </li>

                            <li className="nav-item mx-2 ">
                                <a className="nav-link active" href="#about">ABOUT ME</a>
                            </li>

                            <li className="nav-item mx-2">
                                <a className="nav-link active" href="#blog">BLOG</a>
                            </li>

                            <li className="nav-item mx-2">
                                <a className="nav-link active" href="#contact">CONTACT</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <div>

            </div>

            <div className="container mt-5">

                {/* <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} /> */}

                <Snowfall
                    // Changes the snowflake color
                    color="white"
                    // Applied to the canvas element
                    // style={{ background: '#fff' }}
                    // Controls the number of snowflakes that are created (default 150)
                    snowflakeCount={150}
                />

                <div className="row">
                    <div className="col-md-6 headline">
                        <div className="intro">
                            <p>WELCOME TO MY WORLD</p>
                            <h1>Hi, I'm <span>Showrav</span></h1>
                            <p className="designation"> a{' '}
                                <Typical
                                    steps={[
                                        'Front End Developer', 1000, 'React Developer', 1000, 'Programmer', 1000
                                    ]}
                                    loop={Infinity}
                                    wrapper="b"
                                />
                            </p>
                            <div>
                                <p>I am Showrav. Recently I completed my Web development courses and become a junior web developer. I have good experience with web applications and building websites. I love programming. I love to explore and learn.</p>
                            </div>
                            <a href="https://drive.google.com/file/d/16muzg76cyX404twmdkWNwzbLDQ6dJ5O7/view" target="_blank"><button className='resume-btn mt-3'>RESUME</button></a>

                            <p className='mt-5 mx-3'>FIND ME</p>
                            <div className='social-media mb-4 mt-3'>
                                <a href="https://www.facebook.com/showrav.das.39545" target="_blank"><i class=" fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/show.rav/" target="_blank"><i class="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/in/showrav-das/" target="_blank"><i class="fab fa-linkedin-in"></i></a>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='man'>
                            <img className='man-img' src="https://i.ibb.co/F5y3DSm/ssdd-removebg.png" alt="" />
                        </div>

                    </div>

                </div>
            </div >
        </div >

    );
};

export default Navigation;