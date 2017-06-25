import {Inferno, linkEvent} from 'inferno';
import Component from 'inferno-component';
import {Link} from 'inferno-router';

import styles from './styles.scss';

class Topbar extends Component {
	constructor(props, {router}) {
		super(props);
		this.router = router;
	}

	Logout(ctx) {
		localStorage.clear();
		ctx.router.push('/login');
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
	        <a onClick={linkEvent(this, this.Logout)} class="pd-10 pc-cl-v">Logout</a>
        </nav>
      </div>
		);
	}
}

export default Topbar;