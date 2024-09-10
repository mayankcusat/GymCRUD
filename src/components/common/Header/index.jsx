import React, { useEffect, useState } from "react";

const Header = (props) => {
  const { isLoggedIn, UserName, UserRole, UserProfile } = props;
  const [showLoginOrSignUp, setShowLoginOrSignUp] = useState(!isLoggedIn);

  useEffect(() => {
    setShowLoginOrSignUp(!isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <div className="header-nav flex justify-content-between">
        <div className="org-logo"></div>
        <div className="home"></div>
      </div>
    </>
  );
};

export default Header;
