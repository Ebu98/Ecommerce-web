import React from 'react';
import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';

import './Sign-upAndSign-in-Page.style.scss';


const SignupAndSigninPage=() =>{
    return(
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    )
}
export default SignupAndSigninPage;