import React, { useEffect, useState } from "react";
import Button from "../Button";

const Header = (props) => {
  const { isLoggedIn, UserName, UserRole, UserProfile, orgLogo } = props;
  const [showLoginOrSignUp, setShowLoginOrSignUp] = useState(!isLoggedIn);

  useEffect(() => {
    setShowLoginOrSignUp(!isLoggedIn);
  }, [isLoggedIn]);

  const loginHandler = () => {};
  const signUpHandler = () => {};

  return (
    <>
      <nav className="header-nav bg-black flex justify-content-between">
        <div className="org-logo">
          <img src={orgLogo} />
        </div>
        {showLoginOrSignUp && (
          <div className="action-buttons flex">
            <Button
              type={"secondary"}
              onClick={loginHandler}
              label={"Log in"}
            ></Button>
            <Button
              type={"primary"}
              onClick={signUpHandler}
              label={"Sign Up"}
            ></Button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
