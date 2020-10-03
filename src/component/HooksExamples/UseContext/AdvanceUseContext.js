import React, { useMemo } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Index from "./Index";
import About from "./About";
import { UserContext } from "./UserContext";
import { useState } from "react";

const AdvanceUseContext = () => {
  const [value, setValue] = useState("Hello from context");

  const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
      <UserContext.Provider value={providerValue}>
        <Route path='/' exact component={Index} />
        <Route path='/about' component={About} />
      </UserContext.Provider>
    </Router>
  );
};

export default AdvanceUseContext;
