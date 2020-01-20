import React from "react";
import NavBar from "./NavBar";

const Header = props => {
  const { changeUser, signedInUser } = props;
  return (
    <div className="App-header">
      <h1 className="titleBanner">NC News</h1>
      <NavBar changeUser={changeUser} signedInUser={signedInUser} />
    </div>
  );
};

export default Header;
