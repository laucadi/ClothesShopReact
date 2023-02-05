import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in-form.component";
import './authentication.styles.scss'

const Authentication = () => {
  useEffect(() => {
    async function _getRedirectResult() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    _getRedirectResult();
  }, []);

  return (
    <div className='authentication-container'>
      {/* <button onClick={logGoogleUser}>Sign in with Google Pop Up</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
