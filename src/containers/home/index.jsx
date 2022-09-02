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
                        <button>
                            <Link
                            to={'/contact'} className="contact-me__link">
                                Hire me
                            </Link>
                        </button>
                        <button>
                        Download resume
                        </button>
                    </div>
                    <div className="contact-me__socials-wrapper">
                        <FaFacebook size={32} />
                        <FaInstagram size={32} />
                        <FaTwitter size={32} />
                        <FaLinkedin size={32} />
                        <FaGithub size={32} />
                    </div>
            </div>
            </Animate>
        </section>
    )
};
export default Home;