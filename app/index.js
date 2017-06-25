import Inferno from 'inferno';
import Component from 'inferno-component';
import { Router, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

// Login router
import LoginApp from './views/login/holder';
import Login from './views/login';

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

  CheckPermission({ props, router }) {
    if(!localStorage.auth)
      router.push('/login');
  }

  render() {
    return (
      <Router history={ browserHistory }>
        <Route>
          <Route path="/login" component={ LoginApp }>
            <Route path="/" component={ Login } />
          </Route>
          <Route path="/" component={ App }>
            <Route path="/" component={ Home } onEnter={ this.CheckPermission } />
            <Route path="/about" component={ About } onEnter={ this.CheckPermission } />
            <Route path="/users" component={ UsersHome } onEnter={ this.CheckPermission } />
            <Route path="/users/:userId" component={ UsersEdit } onEnter={ this.CheckPermission } />
            <Route path="*" component={ NotFound } onEnter={ this.CheckPermission }/>
          </Route>
        </Route>
      </Router>
    )
  }
}

Inferno.render(
  <Main />,
  document.getElementById("app")
);