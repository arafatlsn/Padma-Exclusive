import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuthentication from './useAuthentication';

const RequireAuth = ({children}) => {

  const { user,loading } = useAuthentication();
  const location = useLocation();
  if(loading){
    return;
  }
  if(!user?.email){
    <Navigate to='/authentication' state={{from: location}} replace></Navigate>
  }
  return children
};

export default RequireAuth;