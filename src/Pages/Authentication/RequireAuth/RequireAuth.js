import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    
    if (error) {
        // Handle authentication error
        return <div>Authentication error: {error.message}</div>;
    }

    if (!user && !loading) {
        // User is not authenticated and authentication state has been initialized
        return <Navigate to='/' state={{ from: location }} replace />;
    }

    if (loading) {
        // Authentication state is being initialized
        return <div>Loading...</div>;
    }

    return children;
};

export default RequireAuth;
