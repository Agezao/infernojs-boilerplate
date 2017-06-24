import Inferno from 'inferno';
import Component from 'inferno-component';
import { Router, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

// App routes
import App from './app';
import Home from './views/home';
import About from './views/about';

import UsersHome from './views/users';
import UsersEdit from './views/users/edit';

import NotFound from './views/notfound';

const browserHistory = createBrowserHistory();

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={ browserHistory }>
        <Route component={ App }>
          <Route path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/users" component={ UsersHome } />
          <Route path="/users/:userId" component={ UsersEdit } />
          <Route path="*" component={ NotFound }/>
        </Route>
      </Router>
    )
  }
}

Inferno.render(
  <Main />,
  document.getElementById("app")
);