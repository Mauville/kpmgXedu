import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
<<<<<<< HEAD
import { Switch, Route  } from 'react-router-dom';
=======
import { Switch, Route } from 'react-router-dom';
>>>>>>> master
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import GuestRoute from './components/GuestRoute/GuestRoute';
import CheckIfLoggedIn from './components/CheckIfLoggedIn/CheckIfLoggedIn';
import LoginPage from './pages/Login/Login';
import RegisterPage from './pages/Register/Register';
import DashboardPage from './pages/Dashboard/Dashboard';
import PageNotFound from './pages/NotFound/NotFound';
<<<<<<< HEAD
import Busqueda from './components/Front/Busqueda';
=======
>>>>>>> master

const App = props => {
  return (
    <ConnectedRouter history={props.history}>
      <CheckIfLoggedIn>
        <Switch>
          <PrivateRoute exact path="/" component={DashboardPage} />
          <GuestRoute exact path="/login" component={LoginPage} />
          <GuestRoute exact path="/register" component={RegisterPage} />
<<<<<<< HEAD
          <Route path="/busqueda" component={Busqueda} />
          { <Route component={PageNotFound} /> }
=======
          <Route component={PageNotFound} />
>>>>>>> master
        </Switch>
      </CheckIfLoggedIn>
    </ConnectedRouter>

  );
};

App.propTypes = {
  history: PropTypes.object
};

export default App;
