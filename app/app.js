import {Inferno} from 'inferno';
import Component from 'inferno-component';

import Topbar from './views/topbar';

class App extends Component {
	render() {
		return(
      <div class="full-width">
      	<Topbar />
      	<div class="container-lg"> 
        	{ this.props.children }
        </div>
      </div>
		);
	}
}

export default App;