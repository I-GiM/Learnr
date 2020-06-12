import React from 'react';
import '../styles/Sign-up-in.css';
import SignUpInImage from '../components/SignUpInImage';
import FormInput from '../components/FormInput';
import Dropdown from '../components/Dropdown';
import Button from '../components/Button';
import { Link } from 'react-router-dom';


function Signup() {
    const classes = [
        {
          id: "1",
          name: "Jss 1"
        },
        {
          id: "2",
          name: "Jss 2"
        },
        {
          id: "3",
          name: "Jss 3"
        },
        {
          id: "4",
          name: "Sss 1"
        },
        {
          id: "5",
          name: "Sss 2"
        },
        {
          id: "6",
          name: "Sss 3"
        }
      ];
    return (
        <React.Fragment>
            <div className="signup-wrap">
                <div className="signup-cont">
                    <div className="signup-img">
                        <SignUpInImage
                            imageTitle={
                                'Learn at your pace. Knowledge is power. 100% free.'
                            }
                            imageContent={
                                `Students below 13 years are required to 
                                use a parent/guardian details to register.
                                By registering to learnr, you agree to our `  /*and ${PrivacyPolicy}.
                                `*/
                            }
                            terms={'Terms of use and'} privacy={'Privacy Policy'}
                        />
                    </div>
                    <div className="signup-form">
                        <FormInput inputType={'text'} placeholder={'Full Name'} name={'name'}/*inputValue={'Full Name'}*/ label={'Full Name'} />
                        <FormInput inputType={'email'} placeholder={'Email'} name={'email'}/*inputValue={'Full Name'}*/ label={'Email'} />
                        <FormInput inputType={'password'} placeholder={'Password'} name={'password'}/*inputValue={'Full Name'}*/ label={'Password'} />
                        <div className="signup-form-inside">
                            <FormInput inputType={'tel'} placeholder={'Phone'} name={'phone'}/*inputValue={'Full Name'}*/ label={'Phone'} />
                            <Dropdown name={'class'} classes={classes} label={'Class'} />
                        </div>
                        <Button text={'Sign up'} />
                        <span>Already have an account? <Link to="/signin">Sign in</Link></span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Signup;