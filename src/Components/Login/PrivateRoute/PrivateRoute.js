import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
     const { user, isLoading } = useAuth();
     const location = useLocation();
     if (isLoading) {
          return <CircularProgress></CircularProgress>
     }
     if (!user.email) {
          return children;
     }
     return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;