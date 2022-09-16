import React from "react";
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';
import { RiContactsFill } from 'react-icons/ri';
import { Animate } from "react-simple-animate";
import { send } from 'emailjs-com';
import { useState } from "react";
import { toast } from 'react-hot-toast'; 
 
const initialState = {
        name: '',
        email:'',
        description: ''
}

const Contact = () => {
    const [toSend, setToSend] = useState(initialState);
    const onSubmit = (e)=>{
        e.preventDefault();
        send(
            'service_rop5kr6',
            'template_rddi9qi',
            toSend,
            'coxCvsK4cPh6ghLlw'
        )
        .then((response) => {
            toast(`Thanks for contacting me!`, {
                duration: 6000,
                position: 'top-center',
                className: 'toast',
                // Custom Icon
                icon: '❤',
              
                // Change colors of success/error/loading icon
                iconTheme: {
                  primary: '#000',
                  secondary: '#fff',
                },
              
                // Aria
                ariaProps: {
                  role: 'status',
                  'aria-live': 'polite',
                },
              });
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        })
        setToSend(initialState);
        
    };
    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value})

    }

    return(
        <section className="contact" id="contact">
            <PageHeaderContent 
                headerText = "Contact Me"
                icon = {<RiContactsFill size={40} />}
            />
            <div className="contact__content">
                <h3 className="contact__content__header-text">Let's Talk</h3>
                <form className="contact__content__form">
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
                            <input name="name" className="inputName" type="text" onChange={handleChange} value={toSend.name} required/>
                            <label htmlFor="name" className="namelabel">Name</label>
                        </div>
                        <div className="emailWrapper">
                            <input name="email" className="inputEmail" type="text" onChange={handleChange} value={toSend.email} required/>
                            <label htmlFor="email" className="emaillabel">Email</label>
                        </div>
                        <div className="descriptionWrapper">
                            <textarea
                            onChange={handleChange} 
                            value={toSend.description}
                            name="description"
                            className="inputDescription"
                            type="text"
                            rows={'5'}
                            style={{resize: "none"}}
                            required
                            />
                            <label htmlFor="description" className="descriptionlabel">Description</label>
                        </div>
                    </div>
                    <button type='submit' onClick={onSubmit}>Submit</button>
                    </Animate>
                </form>
            </div>
        </section>
    )
};
export default Contact;