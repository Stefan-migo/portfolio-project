import React from "react";
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';
import { RiContactsFill } from 'react-icons/ri';
import { Animate } from "react-simple-animate";

const Contact = () => {
    return(
        <section className="contact" id="contact">
            <PageHeaderContent 
                headerText = "Contact Me"
                icon = {<RiContactsFill size={40} />}
            />
            <div className="contact__content">
                <h3 className="contact__content__header-text">Let's Talk</h3>
                <div className="contact__content__form">
                    <Animate
                    play
                    duration={1}
                    delay={0.4}
                    start={{
                        transform : 'translateX(-800px)'
                    }}
                    end={{
                        transform : 'translateX(0px)'
                    }}
                    >
                    <div className="contact__content__form__controlsWrapper">
                        <div className="nameWrapper">
                            <input name="name" className="inputName" type="text"/>
                            <label htmlFor="name" className="namelabel">Name</label>
                        </div>
                        <div className="emailWrapper">
                            <input name="email" className="inputEmail" type="text"/>
                            <label htmlFor="email" className="emaillabel">Email</label>
                        </div>
                        <div className="descriptionWrapper">
                            <textarea
                            name="description"
                            className="inputDescription"
                            type="text"
                            rows={'5'}
                            style={{resize: "none"}}
                            />
                            <label htmlFor="description" className="descriptionlabel">Description</label>
                        </div>
                    </div>
                    <button>Submit</button>
                    </Animate>
                </div>
            </div>
        </section>
    )
};
export default Contact;