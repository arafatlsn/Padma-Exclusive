import React from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthentication from './useAuthentication';

const RequireAuth = ({children}) => {
  const { user,loading } = useAuthentication();
  const location = useLocation();
  
  if(loading){
    return;
  }
  if(!user?.email){
    toast.error('Please SignIn')
    return <Navigate to='/authentication' state={{from: location}} replace></Navigate>
  }
  return children
};

export default RequireAuth;