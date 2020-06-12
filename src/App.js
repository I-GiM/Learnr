import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './components/Header';
import './styles/bootstrap.css';
import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import WelcomeGeneral from './pages/WelcomeGeneral';
import Mathematics from './pages/subjects/Mathematics';
import English from './pages/subjects/English';
import BasicScience from './pages/subjects/BasicScience';
import BasicTechnology from './pages/subjects/BasicTechnology';
import SocialStudies from './pages/subjects/SocialStudies';
import CivicEducation from './pages/subjects/CivicEducation';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' component={Welcome} />
      <Route path='/signup' component={Signup} />
      <Route path='/welcome/general' component={WelcomeGeneral} />
      <Route path='/guest/mathematics' component={Mathematics} />
      <Route path='/guest/english' component={English} />
      <Route path='/guest/basic-science' component={BasicScience} />
      <Route path='/guest/basic-technology' component={BasicTechnology} />
      <Route path='/guest/social-studies' component={SocialStudies} />
      <Route path='/guest/civic-education' component={CivicEducation} />
      <Footer />
    </Router>
  );
}

export default App;
