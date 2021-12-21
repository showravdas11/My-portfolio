import React from 'react';
import './Features.css'
const Features = () => {
    return (
        <div>
            <div className='features-bg' id='features'>
                <h1 className='text-center'>WHAT I DO</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className='details mt-5'>
                                <img className='icon' src="https://img.icons8.com/ios/50/000000/html-5.png" />
                                <h4 className='mt-3'>PSD to HTML</h4>
                                <p> I can covert any PSD design to a responsive webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works in portfolio tab in this website</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='details mt-5'>
                                <img className='icon' src="https://img.icons8.com/ios/50/000000/web-design.png" />
                                <h4 className='mt-3'>Web Design</h4>
                                <p>I am expert in web designing. I can add functionality besides designing a webpage. I use HTML, CSS, Bootstrap, Vanilla Js, React JS for it. You can see some of my works below</p>
                            </div>
                        </div>
                        <div className="col-md-4 work">
                            <div className='details mt-5'>
                                <img className='icon' src="https://img.icons8.com/ios/50/000000/developer--v2.png" />
                                <h4 className='mt-3'>MERN Stack Web Development</h4>
                                <p>I am a MERN stack web developer. I use MongoDB for database and Express JS, Node Js for server side work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;




