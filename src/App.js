import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Signin } from './pages/signin';
import { Auth0Provider } from '@auth0/auth0-react';
function App() {
  return (
    <AuthWrapper>
    <Router>
      <Switch>  
        {/* switch helps me to switch from page to page without having to have multiple page at onces */}
      {/* //path for homepage */}
      {/* //note exact prop makes it select the exact path */}
      <PrivateRoute path='/' exact={true}>
      <Dashboard></Dashboard>
      {/* <h1>collect whatsapp Api to collect text displayed on my screen for an Ai bot</h1> */}
      </PrivateRoute>
      {/* path for login */}
      <Route path='/login' exact={true}>
      <Login></Login>
      </Route>
      {/* //now if user navigate to page that doesnt exit */}
 {/* //so i use path with a value of * */}
  <Route>
    {/* setting up and error page  */}
    <Error path="*"></Error>
  </Route>
  </Switch>
    </Router>
    </AuthWrapper>
  );
}

export default App;
