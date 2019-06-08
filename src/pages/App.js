import React, { useState } from "react";
import { Router, Redirect } from "@reach/router";

const RedirectPage = () => <Redirect to="/" />;

const App = () => {
  return (
    <div>
      <Router>
        <RedirectPage path="*" exact />
      </Router>
    </div>
  );
};

export default App;
