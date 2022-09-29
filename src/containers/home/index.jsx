import React from "react";
import './styles.scss';
import { Animate } from "react-simple-animate";
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Stefan.
                    <br />
                    FullStack Web Developer.
                </h1>
            </div>
           <Animate
                play
                duration={1.5}
                delay={1}
                start={{
                    transform: 'translateY(600px)'
                }}
                end={{
                    transform: 'translateX(0px)'
                }}
            >
            <div className="contact-me">
                    <div className="contact-me__buttons-wrapper">
                        
                            <Link
                            to={'/contact'} className="contact-me__link">
                                <button>
                                Hire me
                                </button>
                            </Link>
                        
                        <a href='https://drive.google.com/drive/folders/1P2fnYlbZwpP5Tnyfd8OoncAd-_KqFM7j?usp=sharing' target='_blank' alt='drive folder'>
                            <button>
                                Download resume
                            </button>
                        </a>
                    </div>
                    <div className="contact-me__socials-wrapper">
                        <a href='https://www.instagram.com/leberland/' target='_blank' alt='personal instagram'> 
                            <FaInstagram size={32} /> </a>
                        <a href='https://www.linkedin.com/in/stefanmiranda/' target='_blank' alt='personal linkedin'>
                            <FaLinkedin size={32} /></a>
                        <a href='https://github.com/Stefan-migo' target='_blank' alt='personal github'>
                            <FaGithub size={32} /></a>
                    </div>
            </div>
            </Animate>
        </section>
    )
};
export default Home;