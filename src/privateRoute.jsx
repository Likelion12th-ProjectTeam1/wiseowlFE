import React from 'react';
import { Navigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const PrivateRoute = ({ element }) => {
  const cookies = new Cookies();
  const accessToken = cookies.get('accessToken');
  
  if (!accessToken) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default PrivateRoute;
