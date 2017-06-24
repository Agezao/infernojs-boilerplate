import {Inferno} from 'inferno';
import Component from 'inferno-component';
import {Link} from 'inferno-router';

class Topbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
      <div class="full-width row pd-20 overflow-hidden">
      	<div class="col-2">
      		<p class="ma-cl-v bold-header">Inferno Boilerplate</p>
      	</div>
      	<nav class="col-10">
	        <Link to="/" class="pd-10 pc-cl-v pd-cl-l">Home</Link>
	        <Link to="/users" class="pd-10 pc-cl-v">Users</Link>
	        <Link to="/about" class="pd-10 pc-cl-v">About</Link>
        </nav>
      </div>
		);
	}
}

export default Topbar;