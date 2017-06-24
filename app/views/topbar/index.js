import {Inferno} from 'inferno';
import Component from 'inferno-component';
import {Link} from 'inferno-router';

class Topbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
      <div class="full-width pd-20 overflow-hidden">
      	<p class="pull-left ma-cl-v bold-header">Inferno Boilerplate</p>
      	<nav class="pull-right">
	        <Link to="/" class="pd-10 pc-cl-v">Home</Link>
	        <Link to="/users" class="pd-10 pc-cl-v">Users</Link>
	        <Link to="/about" class="pd-10 pc-cl-v">About</Link>
        </nav>
      </div>
		);
	}
}

export default Topbar;