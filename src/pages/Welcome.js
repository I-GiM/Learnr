import React from 'react';
import '../styles/Style.css';
import {Link} from 'react-router-dom';
import SubjectCard from '../components/SubjectCard';
import Mathematics from '../images/Mathematics.png';
import English from '../images/English.png';
import BasicScience from '../images/Basic_Science.png';
import BasicTechnology from '../images/Basic_Technology.png';
import SocialStudies from '../images/Social_Studies.png';
import CivicEducation from '../images/Civic_Education.png';


function Welcome() {
    const toSubjectMaths = () => {
        window.open('/guest/mathematics', '_self');
    }
    const toSubjectEng = () => {
        window.open('/guest/english', '_self');
    }
    const toSubjectBasSci = () => {
        window.open('/guest/basic-science', '_self');
    }
    const toSubjectBasTech = () => {
        window.open('/guest/basic-technology', '_self');
    }
    const toSubjectSocSci = () => {
        window.open('/guest/social-studies', '_self');
    }
    const toSubjectCivEdu = () => {
        window.open('/guest/civic-education', '_self');
    }
    return (
        <React.Fragment>
            <div className="top-section">
                <h1 className="text-white">Build the minds of the<br/>future.</h1>
                <p className="text-white ">With our learning program we drill into the minds of young teen.</p>
                {/* <form className="top-section-form" action="POST">
                    <div className="input-wrap">
                        <label for="classes"></label>
                        <select id="classes" name="classes" className="dropdown">
                            <option value="Class">Class</option>
                            <option value="General">General</option>
                            <option value="Jss One">Jss One</option>
                            <option value="Jss Two">Jss Two</option>
                            <option value="Jss Three">Jss Three</option>
                            <option value="Sss One">Sss One</option>
                            <option value="Sss Two">Sss Two</option>
                            <option value="Sss Three">Sss Three</option>
                        </select>
                        <input className="input-subj" type="text" placeholder="Subject" />
                    </div>
                    <button className="form-button text-white px-3 bg-primary rounded" >Search</button>
                </form>             */}
            </div>
            <div className="py-3 class-sel-wrap">
                <Link className="mx-3 class-sel activate" to="/guest/general">General</Link>
                <Link className="mx-3 class-sel" to="/guest/jss-one">Jss One</Link>
                <Link className="mx-3 class-sel" to="/guest/jss-two">Jss Two</Link>
                <Link className="mx-3 class-sel" to="/guest/jss-three">Jss Three</Link>
                <Link className="mx-3 class-sel" to="/guest/sss-one">Sss One</Link>
                <Link className="mx-3 class-sel" to="/guest/sss-two">Sss Two</Link>
                <Link className="mx-3 class-sel" to="/guest/sss-three">Sss Three</Link>
            </div>
            <div className="subj-wrap">
            <div className="subjects-wrap">
                <SubjectCard image={Mathematics} goToSubject={toSubjectMaths} subject='Mathematics' topicSize='23 Topics' />
                <SubjectCard image={English} goToSubject={toSubjectEng} subject='English' topicSize='25 Topics' />
                <SubjectCard image={BasicScience} goToSubject={toSubjectBasSci} subject='Basic Science' topicSize='30 Topics' />
                <SubjectCard image={BasicTechnology} goToSubject={toSubjectBasTech} subject='Basic Technology' topicSize='40 Topics' />
                <SubjectCard image={SocialStudies} goToSubject={toSubjectSocSci} subject='Social Studies' topicSize='35 Topics' />
                <SubjectCard image={CivicEducation} goToSubject={toSubjectCivEdu} subject='Civic Education' topicSize='40 Topics' />
            </div>
            </div>
        </React.Fragment>
    );
}

export default Welcome;