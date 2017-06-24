import {Inferno, linkEvent, version} from 'inferno';
import Component from 'inferno-component';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {greetings: ""};
	}

	ShowVersion(ctx) {
		ctx.state.greetings = "We are at version: " + version;
		ctx.setState(ctx.state);
	}

	render() {
		return(
		<div>
			<h3>Home</h3>
			<p>This is an Inferno Boilerplate example.</p>
			<p>{this.state.greetings}</p>
			<button class="button ion-information-circled" onClick={ linkEvent(this, this.ShowVersion) }>Show version</button>
		</div>
			);
	}
}

export default Home;