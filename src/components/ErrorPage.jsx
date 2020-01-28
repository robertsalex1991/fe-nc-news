import React from "react";

function ErrorPage(props) {
  const { status, data } = props;
  console.dir(props);
  if (status && data) {
    return (
      <div>
        <h2 className="errorMessage">
          {status}: {" " + data.msg}
        </h2>
      </div>
    );
  } else return <h2 className="errorMessage">404: this page does not exist</h2>;
}

export default ErrorPage;
