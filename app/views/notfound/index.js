import {Inferno, linkEvent, version} from 'inferno';
import Component from 'inferno-component';

class NotFound extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
		<div class="center-text ma-40 ma-cl-h">
			<h3>404. Not Found</h3>
		</div>
			);
	}
}

export default NotFound;