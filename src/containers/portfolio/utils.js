import ImageOne from '../../images/image1.jpg';
import ImageTwo from '../../images/image2.jpg';
import ImageThree from '../../images/image3.jpg';
import ImageFour from '../../images/image4.jpg';
import ImageFive from '../../images/image5.jpg';

export const portfolioData = [
    //section id has to be same value than the id valueo on the filterOptions
    //in order to link all of them when we are filtering them.
    {
        sectionId: 3,
        projectName : 'ToDo Applicacion',
        projectLink : '', // github link
        image: ImageOne
    },
    {
        sectionId: 2,
        projectName : 'Bike Rental App',
        projectLink : '', // github link
        image: ImageTwo
    },
    {
        sectionId: 2,
        projectName : 'Web Page',
        projectLink : '', // github link
        image: ImageThree
    },
    {
        sectionId: 4,
        projectName : 'E-Comerce App',
        projectLink : '', // github link
        image: ImageFour
    },
    {
        sectionId: 4,
        projectName : 'MERN App',
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
        label: 'Desing',
        id: 3
    },
    {
        label: 'FullStack',
        id: 4
    },
];