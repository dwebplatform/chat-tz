import { Button } from '@material-ui/core';
import firebase from 'firebase';
import { auth } from '../firebase.js';

export const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);

  }
  return (<div>
    <Button onClick={() => signInWithGoogle()}>Sign in with google</Button>
  </div>)
}