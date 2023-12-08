import React from "react";
import "./Notfound.css"; 

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Oops! It seems like the page you are looking for does not exist.</p>
      <p>
        Return to <a href="/">home page</a>.
      </p>
    </div>
  );
};

export default NotFound;
