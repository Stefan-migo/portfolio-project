import ImageOne from '../../images/chat-app.jpg';
import ImageTwo from '../../images/smart-brain.jpg';
import ImageThree from '../../images/ecommerce.jpg';
import ImageFour from '../../images/travel-blog.jpg';
import ImageFive from '../../images/portfolio.jpg';

export const portfolioData = [
    //section id has to be same value than the id valueo on the filterOptions
    //in order to link all of them when we are filtering them.
    {
        sectionId: 4,
        projectName : "Pirates' Chat app",
        projectLink : 'https://github.com/Stefan-migo/pirate_chat_app', // github link
        image: ImageOne
    },
    {
        sectionId: 4,
        projectName : 'Smart Brain App',
        projectLink : 'https://github.com/Stefan-migo/smart-brain-app', // github link
        image: ImageTwo
    },
    {
        sectionId: 4,
        projectName : 'E-commerce App',
        projectLink : 'https://github.com/Stefan-migo/ecommerce_sanity_stripe', // github link
        image: ImageThree
    },
    {
        sectionId: 2,
        projectName : 'Travel Blog',
        projectLink : 'https://github.com/Stefan-migo/travel-blog-project', // github link
        image: ImageFour
    },
    {
        sectionId: 2,
        projectName : 'Portfolio',
        projectLink : '', // github link
        image: ImageFive
    },
];

export const filterOptions = [
    {
        label: 'ALL',
        id: 1
    },
    {
        label: 'FrontEnd',
        id: 2
    },
    {
        label: 'FullStack',
        id: 4
    },
];