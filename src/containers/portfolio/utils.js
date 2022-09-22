import ImageOne from '../../images/chat-app.jpg';
import ImageTwo from '../../images/smart-brain.jpg';
import ImageThree from '../../images/ecommerce.jpg';
import ImageFour from '../../images/travel-blog.jpg';
import ImageFive from '../../images/portfolio.jpg';
import ImageSix from '../../images/greentube.jpg';

export const portfolioData = [
    //section id has to be same value than the id valueo on the filterOptions
    //in order to link all of them when we are filtering them.
    {
        sectionId: 4,
        projectName : "Pirates' Chat app",
        projectLink : 'https://pirate-chat-app.vercel.app/', // github link
        image: ImageOne
    },
    {
        sectionId: 4,
        projectName : 'Smart Brain App',
        projectLink : 'https://smart-brain-app.onrender.com', // github link
        image: ImageTwo
    },
    {
        sectionId: 4,
        projectName : 'E-commerce App',
        projectLink : 'http://ecommerce-sanity-stripe-psi-five.vercel.app/', // github link
        image: ImageThree
    },
    {
        sectionId: 2,
        projectName : 'Travel Blog',
        projectLink : 'https://travel-blog-project.vercel.app/', // github link
        image: ImageFour
    },
    {
        sectionId: 2,
        projectName : 'Portfolio',
        projectLink : 'https://www.stefanmigo.com', // github link
        image: ImageFive
    },
    {
        sectionId: 2,
        projectName : 'GreenTube',
        projectLink : 'https://greentube.onrender.com/', // github link
        image: ImageSix
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