import React from "react";
import { useNavigate } from "react-router";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <h1>404</h1>
      <p>Page not found</p>
      <button onClick={() => navigate("/")}> &larr; Go Back</button>
    </div>
  );
};
