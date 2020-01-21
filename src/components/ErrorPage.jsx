import React from "react";

function ErrorPage(props) {
  const { status, data } = props;
  console.log(props);
  return (
    <div>
      <h2 className="errorMessage">
        {status}: {" " + data.msg}
      </h2>
    </div>
  );
}

export default ErrorPage;
