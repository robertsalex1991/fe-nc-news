import React from "react";
import { Link } from "@reach/router";
import TopicsButtons from "./TopicsButtons";
import UserSignIn from "./UserSignIn";

const NavBar = props => {
  const { changeUser, signedInUser } = props;
  return (
    <div className="navBar">
      <Link to={"/articles"} className="homeButton">
        {" "}
        home{" "}
      </Link>
      <TopicsButtons />
      <Link to={"/addArticle"} className="homeButton">
        {" "}
        Add Article{" "}
      </Link>
      <UserSignIn changeUser={changeUser} signedInUser={signedInUser} />
    </div>
  );
};

export default NavBar;
