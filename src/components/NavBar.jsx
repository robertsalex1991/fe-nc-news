import React from "react";
import { Link } from "@reach/router";
import TopicsButton from "./TopicsButtons";

function NavBar(props) {
  return (
    <div className="navbar">
      <p>
        {" "}
        <Link className='homeButton' to="/articles">Home</Link>{" "}
      </p>{" "}
      <TopicsButton />
      <p className="signedIn">{props.signedInUser}: signed in</p>
    </div>
  );
}

export default NavBar;
