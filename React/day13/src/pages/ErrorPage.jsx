import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <h1>404 NOT FOUND</h1>
      <Link to="/">Go back </Link>
    </div>
  );
};

export default ErrorPage;
