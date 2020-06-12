import React from 'react';
import '../styles/Sign-up-in.css';
import SignUpInImage from '../components/SignUpInImage';
import FormInput from '../components/FormInput';
import Emoji from '../images/Emoji.png';
import Button from '../components/Button';
import { Link } from 'react-router-dom';


function Signup() {
    const goToPage = () => {
      window.open('/user/dashboard', '_self');
    }
    return (
        <React.Fragment>
            <div className="signup-wrap">
                <div className="signup-cont">
                    <div className="signup-img">
                        <SignUpInImage
                            imageTitle={'Welcome Back'}
                            emoji={Emoji}
                        />
                    </div>
                    <div className="signup-form">
                        <FormInput inputType={'email'} placeholder={'Email'} name={'email'}/*inputValue={'Full Name'}*/ label={'Email'} />
                        <FormInput inputType={'password'} placeholder={'Password'} name={'password'}/*inputValue={'Full Name'}*/ label={'Password'} />
                        <Link to="" className="forgot-pass">Forgot Password?</Link>
                        <Button goToBtn={goToPage} text={'Sign in'} />
                        <Link to="" className="create-acc">Create Account</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Signup;