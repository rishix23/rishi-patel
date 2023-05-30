import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar.components";
import Projects from "./components/projects.component";
import Photos from "./components/photos.component";
import About from "./components/about.component";
import Blogs from "./components/blogs.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const App = () => {
  const [theme, setTheme] = useState(null);

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  useEffect(() => {
    theme === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
  }, [theme]);

  // switches between light and dark mode
  const themeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Router>
        <Navbar onCallFromNavBar={themeSwitch} />
        <Switch>
          <Route exact path="/" /> {/* This will set the default page */}
          <Route path="/blogs" component={Blogs} />
          <Route path="/projects" component={Projects} />
          <Route path="/photos" component={Photos} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
