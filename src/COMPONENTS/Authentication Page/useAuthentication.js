import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
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
  // update profile 
  const [updateProfile, updating, errorUpdateProfile] = useUpdateProfile(auth);


  console.log(user)
  return { signInWithGoogle, userGoogle, user, createUserWithEmailAndPassword, updateProfile }
};

export default useAuthentication;