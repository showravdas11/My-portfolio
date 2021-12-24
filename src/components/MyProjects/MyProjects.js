import React from 'react';
import './MyProject.css'


// https://tourx-website.web.app/
// https://github.com/showravdas11/TourX
const MyProjects = () => {
    return (
        <div className='project-bg' id='project'>
            <h1 className='text-center'>Some of My Projects</h1>
            <div className="container my-project" data-aos="fade-right">
                <div className="row">
                    <div className="col-md-6">
                        <div className='caro'>
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img className='img-fluid' src="https://i.ibb.co/f40Ndsg/screenbud-6b486ccf-4f04-4674-9feb-a3553e2f08f7.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img className='img-fluid' src="https://i.ibb.co/RQJCf2y/screenbud-818fdea0-d151-4e92-8889-5dc22fa8eec8.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img className='img-fluid' src="https://i.ibb.co/3d0LjG8/screenbud-22a923f7-c0e6-4552-9ac4-f33fd6a69238.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className='project-head text-center'>Royal Cars</h2>
                        <p className="text-white gymee-caro"> This is a car related website. If you want you can login here and see the car details. <br />
                             Users and Admin can sign up and log in to this website using email and password. Anyone
                            cannot go to some pages without login, which is developed by React Router. <br />
                             User dashboard feature to watch all order history or can cancel their order. <br />
                            <h5> Front-end Technology:</h5> HTML5, CSS3, Bootstrap5, React.js, React Router,
                            React Bootstrap, firebase, <br />
                            <h5> Back-end Technology:</h5> Node JS, Express JS, MongoDB</p>
                        <a href="https://royal-car-314b7.web.app/home" target="_blank"><button className='live-btn'>LIVE</button></a>
                        <a href="https://github.com/showravdas11/Royal-Car-Client" target="_blank"><button className='git-btn'>GITHUB (CLIENT)</button></a>
                        <a href="https://github.com/showravdas11/Royal-Cars-server" target="_blank"><button className='git-btn'>GITHUB (SERVER)</button></a>
                    </div>
                </div>
            </div>
            <div className="container my-project" data-aos="fade-left">
                <div className="row">
                    <div className="col-md-6">
                        <div className='caro'>
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img className='img-fluid' src="https://i.ibb.co/TgXJRmr/screenbud-06fd0641-fa32-49ce-a81b-6fa45b86150d.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img className='img-fluid' src="https://i.ibb.co/7QY7YLB/screenbud-c92e96d8-24f4-442a-b1ac-1efe8e923e9f.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img className='img-fluid' src="https://i.ibb.co/N6L2Fvd/screenbud-4ece643c-b60f-4ec9-ab97-50333414dd43.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='gymee-caro'>
                            <h2 className='project-head text-center'>GYMEE</h2>
                            <p className="text-white gymee-caro">
                                 Firebase Authentication system. <br />
                                 Users can sign up using his/her email, Google, <br />
                                 Fully functional and Mobile friendly UI. <br />
                                <h5> Technology:</h5> React, React Bootstrap, CSS3, Firebase, React Router,
                            </p>
                            <a href="https://gymee-website.web.app/" target="_blank"><button className='live-btn'>LIVE</button></a>
                            <a href="https://github.com/showravdas11/Gymee" target="_blank"><button className='git-btn'>GITHUB</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-project" data-aos="fade-right">
                <div className="row">
                    <div className="col-md-6">
                        <div className='caro'>
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img className='img-fluid' src="https://i.ibb.co/Twbmhv4/screenbud-57ec3a85-748a-489f-9ee8-f62c00e33279.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img className='img-fluid' src="https://i.ibb.co/YWBm9Qb/screenbud-8aa79bcb-ad47-4310-9178-65968dbf20a5.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img className='img-fluid' src="https://i.ibb.co/XzS6Krp/screenbud-437026f8-9acd-4699-871d-1af71f25cd7a.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className='text-center project-head'>TourX</h2>
                        <p className="text-white gymee-caro"> This is a car related website. If you want you can login here and see the car details. <br />
                             Users and Admin can sign up and log in to this website using email and password. Anyone
                            cannot go to some pages without login, which is developed by React Router. <br />
                             User dashboard feature to watch all order history or can cancel their order. <br />
                            <h5> Front-end Technology:</h5> HTML5, CSS3, Bootstrap5, React.js, React Router,
                            React Bootstrap, firebase, <br />
                            <h5> Back-end Technology:</h5> Node JS, Express JS, MongoDB</p>
                        <a href="https://tourx-website.web.app/" target="_blank"><button className='live-btn'>LIVE</button></a>
                        <a href="https://github.com/showravdas11/TourX" target="_blank"><button className='git-btn'>GITHUB (CLIENT)</button></a>
                        <a href="https://github.com/showravdas11/tourx-server" target="_blank"><button className='git-btn'>GITHUB (SERVER)</button></a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyProjects;