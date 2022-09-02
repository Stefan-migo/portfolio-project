import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//we are using the React-router-dom. this will help us to organise all the routes we need in our app
//we are calling the BrowserRouter package as Router(tag)
import { BrowserRouter as Router } from 'react-router-dom'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router> {/*this tag will give access the app to all routing funtionality */}
      <App />
    </Router>
  </React.StrictMode>
);


