import {BrowserRouter as Router, Switch} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Home from "./pages/home";
import Browse from "./pages/Browse";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import {IsUserRedirect, ProtectedRoute} from './helpers/routes';
import useAuthListener from './hooks/use-auth-listener';

function App() {

  const {user} = useAuthListener();

  return (
    <Router>
    <Switch>
      <IsUserRedirect user={user} loggedInPath={ROUTES.Browse} path={ROUTES.SignIn}>
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.Browse} path={ROUTES.SignUp}>
        <SignUp />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.Browse}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect user={user} loggedInPath={ROUTES.Browse} path={ROUTES.HOME}>
        <Home />
      </IsUserRedirect>
    </Switch>
  </Router>
  );
}

export default App;
