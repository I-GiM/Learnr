import React from 'react';
import '../styles/Sign-up-in.css';

const SignUpInImage = (props) => {
    
    return (
        <div className="sign-img-wrap">
            <p className="text-white content-1">{props.imageTitle}</p>
            <img src={props.emoji} />
            <span className="text-white content-2">
                {props.imageContent}
                <span className="termspolicy" onClick={()=>{window.open('/guest/terms-of-use', '_self');}}>
                    {props.terms}
                </span> <span className="termspolicy" onClick={()=>{window.open('/guest/privacy-policy', '_self');}}>
                    {props.privacy}
                </span>
            </span>
        </div>
    );
}

export default SignUpInImage;
