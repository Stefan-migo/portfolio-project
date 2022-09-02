import React from "react";
import PageHeaderContent from '../../components/pageHeaderContent';
import './styles.scss';
import { AiFillProject } from 'react-icons/ai';
import { filterOptions, portfolioData } from "./utils";
import { useState } from "react";
import { Animate, AnimateKeyframes } from "react-simple-animate";

const Portfolio = () => {
    const [ hoveredIndex, setHoveredIndex] = useState(null)
    const [ filterValue, setFiletValue ] = useState(1)    
    const handlerFilter = (id)=> {
        setFiletValue(id);    
    }   
    const filteredPortfolioData = filterValue === 1 ? portfolioData : 
    portfolioData.filter(item => item.sectionId === filterValue);

    return(
        <section className="portfolio" id="portfolio">
            <PageHeaderContent 
            headerText = "My Portfolio"
            icon = {<AiFillProject size={40} />}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {filterOptions.map((option)=>(
                        <li 
                        className={option.id === filterValue?"active" : ''}
                        key={`filter${option.id}`} 
                        onClick={()=> handlerFilter(option.id)}>
                            {option.label}
                        </li>
                    ))}
                </ul>
                <AnimateKeyframes
                play
                duration={2}
                keyframes={['opacity:1', 'opacity:0']}
                iterationCount='1'
                >
                <div className="portfolio__content__cards">
                    {filteredPortfolioData.map((item, key)=>(
                        <div 
                        onMouseEnter={()=> setHoveredIndex(key)}
                        onMouseLeave={()=> setHoveredIndex(null)}
                        key={key} 
                        className="portfolio__content__cards__item">
                            <div className="portfolio__content__cards__item__img-wrapper">
                                <a>
                                    <img src={item.image} alt={item.projectName} />
                                </a>
                            </div> 
                            <div className="overlay">
                                {hoveredIndex === key && (
                                <div>
                                    <p>{item.projectName}</p>
                                    <button>Visit</button>
                                </div>
                                )}  
                            </div>
                            
                        </div>
                    ))}
                </div>
                </AnimateKeyframes>
            </div>
        </section>
    )
};
export default Portfolio;