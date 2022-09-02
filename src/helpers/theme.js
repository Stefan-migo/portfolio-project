
//this function will take as a parameter from the gear button that changes the theme color (color string). 
//then it will pass the parameter('color') to the css style, in order to change the theme.
//current theme is a prop that has brought from the theme change buttons (onClick function).
//onClick function set the state of theme. theme is use as a parameter in useEffect.
//useEffect calls the function setTheme, using as a parameter the color clicked on the toggle. 
const setTheme = (currentTheme) => {
    const selectRoot = document.styleSheets
    


//extract the css props we want to change (--selected)
//array from creates an array out of an object (document.stylesheet)
  
//reduce method executes a reducer callback function on each element of the array.
//
const selectedCssProps = Array.from(selectRoot) // I want to grab the array document.styleSheets and modify an element nested within another inner array.
.reduce((prevStyleSheet, currStyleSheet) => ( // as i just want to modify an inner element, I have to travel through it in order to get that element.
    prevStyleSheet = [ //the reducer function is gonna return this new array made out of the empty array(iniValue).
        ...prevStyleSheet, //an empty array
        ...Array.from(currStyleSheet.cssRules) //it takes the 'cssRules'(is an objetc) element out of each element[x] of the array document.Stylesheet and it returns as an array.
            .reduce((prevCssRules, currCssRules) => {//the new array will be reduce again by a new function.
            prevCssRules = currCssRules.selectorText === ":root" ? [
                ...prevCssRules,
                ...Array.from(currCssRules.style).filter(item => item.startsWith('--selected'))
            ] : prevCssRules;
            return prevCssRules;
        },[])
    ]
), []); //the empty array works as the prevStyleSheet(as well as initValue)) at the beggining of the reducer function.

selectedCssProps.forEach(value=> {
    document.documentElement.style.setProperty(value, `var(--${currentTheme}${value.substring(10)})`)
})
}



export default setTheme;