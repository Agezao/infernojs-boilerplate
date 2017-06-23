import {Inferno, linkEvent, version} from 'inferno';
import Component from 'inferno-component';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {greetings: "We are at version: "};
	}

	ShowVersion(ctx) {
		ctx.state.greetings += version;
		ctx.setState(ctx.state);
	}

	render() {
		return(
				<div>
					<p>This is an Inferno Boilerplate example.</p>
					<p>{this.state.greetings}</p>
					<button onClick={ linkEvent(this, this.ShowVersion) }>Show version</button>
				</div>
			);
	}
}

export default Home;