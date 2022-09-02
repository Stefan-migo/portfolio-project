import React from "react";
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';
import { BsInfoCircleFill } from 'react-icons/bs';
import { personalData } from "./utils";
import { Animate } from "react-simple-animate";
import { DiReact, DiJavascript, DiPostgresql, DiNodejs } from 'react-icons/di'


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
                    <h3 className="developerContent"> FullStack Web Developer </h3>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto aut modi eveniet totam magni unde nulla quo a rerum illum aspernatur, doloribus beatae deserunt impedit vel facere in quam dicta.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate sed consequatur blanditiis quo aut sit asperiores illum quod? Et totam perspiciatis illo ipsa quos voluptatem. Dicta eum suscipit sint perferendis.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti suscipit hic officiis dolor minus, sint laborum voluptates eligendi voluptatem facere molestias rerum iste illo voluptas, fugit, cum aliquid autem tempore?
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta pariatur laudantium quo, provident, mollitia earum officia commodi temporibus sapiente consequuntur autem sequi reiciendis eos in nesciunt at. Et, dicta aperiam?
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
                            <DiNodejs size={60} color="var(--selected-theme-main-color)" />
                        </div>
                        <div>
                            <DiPostgresql size={60} color="var(--selected-theme-main-color)" />
                        </div>
                    </div>
                </Animate>
                </div>
            </div>
        </section>
    )
};
export default About;