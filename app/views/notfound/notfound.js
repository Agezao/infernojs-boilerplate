import {Inferno, linkEvent, version} from 'inferno';
import Component from 'inferno-component';

class NotFound extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
				<div>
					<h1>404. Not Found</h1>
				</div>
			);
	}
}

export default NotFound;