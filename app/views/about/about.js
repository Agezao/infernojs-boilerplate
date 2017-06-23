import {Inferno, linkEvent, version} from 'inferno';
import Component from 'inferno-component';
import {Link} from 'inferno-router';

class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
		<div>
			<h3>About</h3>
			<div class="row">
				<div class="col-12">
					 <p>Simple <a href="https://github.com/infernojs" target="_blank">InfernoJs</a> boilerplate with a router.</p>
				</div>
				<div class="col-12 center-text">
					 <a class="button lg ion-social-github" href="https://github.com/Agezao/infernojs-boilerplate" target="_blank">Github</a>
				</div>
			</div>
		</div>
			);
	}
}

export default About;