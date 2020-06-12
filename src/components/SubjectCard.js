import React from 'react';
import '../styles/Style.css';

const SubjectCard = (props) => {
    return(
        <div className="subject-card">
            <img className="subject-img" src={props.image} onClick={props.goToSubject} alt=""/>
            <span className="subject">{props.subject}</span>
            <span className="topic-size">{props.topicSize}</span>
        </div>
    );
}

export default SubjectCard;