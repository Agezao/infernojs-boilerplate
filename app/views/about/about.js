import {Inferno, linkEvent, version} from 'inferno';
import Component from 'inferno-component';

class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
				<div>
					<h1>About</h1>
				</div>
			);
	}
}

export default About;