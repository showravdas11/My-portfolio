import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className='Fotter-bg'>
                <div className='footer-text'>
                    <p className='text-white text-center'>Copyright © 2021 | Showrav</p>
                    <p className='text-white text-center'>Address: Dharmapur Satkania Chattogram.</p>

                    <div className='footer-icon'>
                        <div className='social-media mb-4 mt-3'>
                            <a href="https://www.facebook.com/showrav.das.39545" target="_blank"><i class=" fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/show.rav/" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/showrav-das//" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                            <a href="https://github.com/showravdas11" target="_blank"><i class="fab fa-github"></i></a>

                        </div>
                    </div>

                </div>


            </div>

        </>
    );
};

export default Footer;
