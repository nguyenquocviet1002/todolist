import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useGoogleAuth } from "./Auth";

const PrivateRouter = ({ component: Component, ...rest }) => {
  const { isSignedIn } = useGoogleAuth;

  return (
    <div>
      <Routes>
        <Route
          {...rest}
          render={(props) =>
            !isSignedIn ? (
              <Component {...props} />
            ) : (
              <Navigate exact from="/todo" to="/" replace={true} />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default PrivateRouter;
