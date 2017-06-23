import {Inferno} from 'inferno';
import Component from 'inferno-component';

import Topbar from './views/topbar/topbar';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render({ children }) {
		return(
      <div class="full-width">
      	<Topbar />
      	<div class="container-lg"> 
        	{ children }
        </div>
      </div>
		);
	}
}

export default App;