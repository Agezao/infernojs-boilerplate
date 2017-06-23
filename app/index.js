import Inferno from 'inferno';
import Component from 'inferno-component';
import { Router, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

// App routes
import App from './app';
import Home from './views/home/home';
import About from './views/about/about';
import NotFound from './views/notfound/notfound';

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