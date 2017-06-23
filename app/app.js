import {Inferno} from 'inferno';
import Component from 'inferno-component';

import Topbar from './views/topbar/topbar';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render({ children }) {
		return(
      <div>
      	<Topbar />
        <h1>Inferno Boilerplate</h1>
        { children }
      </div>
		);
	}
}

export default App;