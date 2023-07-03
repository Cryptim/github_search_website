import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>  
        {/* switch helps me to switch from page to page without having to have multiple page at onces */}
      {/* //path for homepage */}
      {/* //note exact prop makes it select the exact path */}
      <Route path='/' exact={true}>
      <Dashboard></Dashboard>
      {/* <h1>collect whatsapp Api to collect text displayed on my screen for an Ai bot</h1> */}
      </Route>
      {/* path for login */}
      <Route path='/login' exact={true}>
      <Login />
      </Route>
      {/* //now if user navigate to page that doesnt exit */}
 {/* //so i use path with a value of * */}
  <Route>
    {/* setting up and error page  */}
    <Error path="*"></Error>
  </Route>
  </Switch>
    </Router>
  );
}

export default App;
