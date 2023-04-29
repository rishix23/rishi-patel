import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar.components';
import Projects from './components/projects.component';
import Photos from './components/photos.component'
// import About from './components/about.component'
import Blogs from './components/blogs.component'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"/> {/* This will set the default page */}
        <Route path="/blogs" component={Blogs} /> 
        <Route path="/projects" component={Projects} />
        <Route path="/photos" component={Photos} />
        {/* <Route path="/about" component={About} /> */}
      </Switch>
    </Router>
  );
};

export default App;
