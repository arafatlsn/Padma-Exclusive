import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './Firebase.init';

const useAuthentication = () => {
  // signin google 
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(
    auth
  );
  // load user
  const [user, loading, error] = useAuthState(auth);
  // create accoutn with email pass 
  const [
    createUserWithEmailAndPassword,
    userCreateEmailPass,
    loadingCreateEmailPass,
    errorCreateEmailPass,
  ] = useCreateUserWithEmailAndPassword(auth);
  // sign in with email pass 
  const [
    signInWithEmailAndPassword,
    userSignEmailPass,
    loadingSignEmailPass,
    errorSignEmailPass,
  ] = useSignInWithEmailAndPassword(auth);
  // update profile 
  const [updateProfile, updating, errorUpdateProfile] = useUpdateProfile(auth);

  return { signInWithGoogle, userGoogle, user, loading,  createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword }
};

export default useAuthentication;