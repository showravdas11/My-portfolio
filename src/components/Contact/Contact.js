import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('das123', 'template_2cvu2im', form.current, 'user_4wcovPHqgzGaAuuyNmDj3')
            .then((result) => {
                alert('successfully')
            }, (error) => {
                alert(error.message);
            });
        e.target.reset()
    };


    return (
        <div className='contact-bg' id='contact'>
            <h1 className="contact-text">Contact With Me</h1>
            <section className="contact container">
                <div className="contact-container">
                    <div className="contactInfo">

                        <div className="box">
                            <div className="icons">
                                <i class="fas fa-home"></i>
                            </div>
                            <div className="text">
                                <h2>Address</h2>
                                <p>Dharmapur Satkania Chattogram.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <div className="text">
                                <h2>Phone</h2>
                                <p>+8801309722830</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icons">
                                <i class="far fa-envelope"></i>
                            </div>
                            <div className="text">
                                <h2>Email</h2>
                                <p>showravdas11@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="contactForm">
                        <form ref={form} onSubmit={sendEmail}>
                            <h2 className='text-white'>Send Messages</h2>
                            <div className="inputBox">
                                <input type="text" name='client-name' placeholder='Name' required />
                            </div>
                            <div className="inputBox">
                                <input type="text" name='email' placeholder='Your Email' required />
                            </div>
                            <div className="inputBox">
                                <textarea required name='message' placeholder='Type Your message...'></textarea>
                            </div>
                            <div className="inputBox">
                                <button className='conta-btn'><i class="fas fa-paper-plane"></i> SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;