import React from "react";
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';
import { BsInfoCircleFill } from 'react-icons/bs';
import { personalData } from "./utils";
import { Animate } from "react-simple-animate";
import { DiReact, DiJavascript, DiPostgresql, DiCss3 } from 'react-icons/di'


const About = () => {
    return (
        <section className="about" id="about">
            <PageHeaderContent
                headerText="About me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start = {{
                        transform: 'translateX(-800px)'
                    }}
                    end = {{
                        transform: 'translateX(0px)'
                    }}
                    >
                    <h3 className="developerContent">My journey as a Full Stack Web Developer </h3>

                    <p> 
                        I would like to introduce myself to you as I believe I have the skills, qualifications and experience necessary to make a significant contribution to your team.<br/>
                        <br/>
                        I graduated from the University of Chile and I hold a bachelor's degree as an Optometrist (eye Specialist). In addition, I also have experience in other areas, where I have developed and certificated my skills, one of them being Full Stack Web Development, the field where I have been since the pandemic began.<br/>
                        <br/> 
                        A few years ago I made up my mind to move abroad from my country, in order to find my path in life and explore new job opportunities. I quit my job as an eye specialist in Chile and I started this journey to find my real passion. After 3 years of moving and exploring different fields, I finally understood that I have had a connection with coding since I was very young. So I have been studying different programming languages and above all, coding different sorts of projects to improve my coding skills.<br/>
                        <br/> 
                        My problem-solving mindset, outgoing personality and can-do approach to any task make me a valued team member, and ensure that each project will be built with the best practices possible.<br/>  
                        <br/> 
                        I believe that my experience in several areas is complemented by my abilities such as working under pressure, teamwork, willingness to learn and constant positive attitude. They all together make me an excellent candidate to join your team.
                    </p>
                </Animate>
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start = {{
                        transform: 'translateX(800px)'
                    }}
                    end = {{
                        transform: 'translateX(0px)'
                    }}
                    >
                    <h3 className="personalContent">Personal Information</h3>
                    <ul>
                        {personalData.map((item, key) => {
                            return (
                                <li key={key}>
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.value}</span>
                                </li>)
                        })}
                    </ul>
                </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start = {{
                        transform: 'translateX(800px)'
                    }}
                    end = {{
                        transform: 'translateX(0px)'
                    }}
                    >
                    <div className="about__content__servicesWrapper__innerContent">
                        <div>
                            <DiReact size={60} color="var(--selected-theme-main-color)" />
                        </div>
                        <div>
                            <DiJavascript size={60} color="var(--selected-theme-main-color)" />
                        </div>
                        <div>
                            <DiPostgresql size={60} color="var(--selected-theme-main-color)" />
                        </div>
                        <div>
                            <DiCss3 size={60} color="var(--selected-theme-main-color)" />
                        </div>
                    </div>
                </Animate>
                </div>
            </div>
        </section>
    )
};
export default About;