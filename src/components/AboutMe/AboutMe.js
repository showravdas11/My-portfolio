import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='about-sections' id='about'>
            <section class="section about-section gray-bg" id="about">
                <div class="container">
                    <div class="row align-items-center flex-row-reverse ">
                        <div class="col-lg-6">
                            <div class="about-text go-to">
                                <h3 class="dark-color">About Me</h3>
                                {/* <h6 class="theme-color lead">dgdfgdfg</h6> */}
                                <p>I <mark>am Showrav.</mark> Recently I have completed my Web development courses and become a junior web developer. I have good experience with web applications and building websites. I love programming. I love to explore and learn.
                                    <h2 className='text-white text-center'>My Skills</h2>
                                </p>
                                <div class="row about-list">
                                    <div class="col-md-6">
                                        <div class="media">
                                            <p>React.js</p>
                                        </div>

                                        <div class="media">
                                            <p>HTML5</p>
                                        </div>
                                        <div class="media">
                                            <p>CSS3</p>
                                        </div>
                                        <div class="media">
                                            <p>JavaScript (ES6)</p>
                                        </div>
                                        <div class="media">
                                            <p>React Bootstrap,</p>
                                        </div>
                                        <div class="media">
                                            <p>Material UI</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="media">
                                            <p>Bootstrap</p>
                                        </div>
                                        <div class="media">
                                            <p>Node.js</p>
                                        </div>
                                        <div class="media">
                                            <p>Express.js</p>
                                        </div>
                                        <div class="media">
                                            <p>MongoDB</p>
                                        </div>
                                        <div class="media">
                                            <p>Firebase</p>
                                        </div>
                                        <div class="media">
                                            <p>Tailwind CSS.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-avatar">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default AboutMe;