import React from "react";
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';
import { FaBlackTie } from 'react-icons/fa'
import { MdWork } from 'react-icons/md'
// import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { Data } from "./utils";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';


const Resume = () => {
    return (
        <section className="resume" id="resume">
            <PageHeaderContent
                headerText="My Resume"
                icon={<FaBlackTie size={40} />}
            />
            <div className="timeline">
                <div className="timeline__experience">
                    <h3 className="timeline__experience__header-text">Experience</h3>
                    <VerticalTimeline
                        layout="1-column"
                        lineColor="var(--selected-theme-main-color)">
                        {Data.experience.map((item) => (
                            <VerticalTimelineElement
                                key={item.title}
                                className="timeline__experience__vertical-timeline-component"
                                contentStyle={{
                                    background: 'none',
                                    color: 'var(--selected-theme-main-color)',
                                    border: '1.5px solid var(--selected-theme-main-color)'
                                }}
                                date={item.date} //item.date if you create that element into the array
                                iconStyle={{
                                    background: '#181818',
                                    color: 'var(--selected-theme-main-color)',
                                }}
                                icon={<MdWork />}
                            >
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3>{item.title}</h3>
                                    <h4>{item.subTitle}</h4>         
                                </div>
                                <p className="vertical-timeline-element-description-wrapper">{item.description}<br/>
                                <a href={item.link} alt='github link' target='_blank'>{item.link}</a><br/>
                                <a href={item.linkLive} alt='live link' target='_blank'>{item.linkLive}</a></p>

                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>

                <div className="timeline__education">
                    <h3 className="timeline__education__header-text">Education</h3>
                    <VerticalTimeline
                        layout="1-column"
                        lineColor="var(--selected-theme-main-color)">
                        {Data.education.map((item) => (
                            <VerticalTimelineElement
                                key={item.title}
                                className="timeline__education__vertical-timeline-component"
                                contentStyle={{
                                    background: 'none',
                                    color: 'var(--selected-theme-main-color)',
                                    border: '1.5px solid var(--selected-theme-main-color)'
                                }}
                                date={item.date} //item.date if you create that element into the array
                                iconStyle={{
                                    background: '#181818',
                                    color: 'var(--selected-theme-main-color)',
                                }}
                                icon={<MdWork />}                            >
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3>{item.title}</h3>
                                    <h4>{item.subTitle}</h4>
                                    
                                </div>
                                <h5>{item.institution}</h5>
                                <p className="vertical-timeline-element-description-wrapper">{item.description}</p>

                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>

            </div>
        </section>
    )
};
export default Resume;