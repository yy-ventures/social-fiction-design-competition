import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../App';


const PrivateRoute = ({children, ...rest}) => {
    const [userDetails, setUserDetails]  = useContext(AuthContext);

    return (
        <Route
      {...rest}
      render={({ location }) =>
        (userDetails.username) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;