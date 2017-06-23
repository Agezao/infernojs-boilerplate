import {Inferno} from 'inferno';
import Component from 'inferno-component';
import {Link} from 'inferno-router';

class Topbar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
		);
	}
}

export default Topbar;