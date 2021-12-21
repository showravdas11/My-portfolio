import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='my-blog' id='blog'>
            <div className='blog-title'>
                <h1 className='text-center'>MY BLOG</h1>
            </div>
            <div className="container mt-5 ">
                <div className="row blog-container">
                    <div className="col-md-4 blog-contain">
                        <div className="img-contaier">
                            <img className='img-fluid' src="https://image.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg" alt="" />
                        </div>
                        <div className="content-container">
                            <h2>Javascript</h2>
                            <h4>Difference between Double equals and Triple equals</h4>
                            <p>Well in short:   ==   inherently converts type and   ===   does not convert type. Double Equals ( == ) checks for value equality only.</p>
                            <a target="_blank" href="https://showrav-das.blogspot.com/">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 blog-contain">
                        <div className="img-contaier">
                            <img className='img-fluid' src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg" alt="" />
                        </div>
                        <div className="content-container">
                            <h2>Javascript</h2>
                            <h4>JavaScript Interview Questions</h4>
                            <p>Let us start by taking a look at some of the most frequently asked Javascript Interview Questions</p>
                            <a target="_blank" href="https://showrav-das.blogspot.com/2021/11/the-difference-between-undefined-and.html">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 blog-contain">
                        <div className="img-contaier">
                            <img className='img-fluid' src="https://image.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-743.jpg" alt="" />
                        </div>
                        <div className="content-container">
                            <h2>Javascript</h2>
                            <h4>React Interview Question</h4>
                            <p>Let us start by taking a look at some of the most frequently asked React Interview Questions</p>
                            <a target="_blank" href="https://showrav-das.blogspot.com/2021/11/is-jsx-jsx-is-shorthand-for-javascript.html">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Blog;