import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import UsersList from './UsersList';
import IndividualUser from './IndividualUser';

function App() {
  return (
    <div>
      <h1>React Routing</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/users" component={UsersList} exact={true} ></Route>
      <Route path={`/users/:id`} component={IndividualUser}></Route>
    </div>
  );
}

export default App;
