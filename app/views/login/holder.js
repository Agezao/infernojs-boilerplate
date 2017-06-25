import {Inferno} from 'inferno';
import Component from 'inferno-component';

class LoginApp extends Component {
	render() {
		return(
      <div class="full-width">
      	<div class="container-sm overflow-hidden"> 
        	{ this.props.children }
        </div>
      </div>
		);
	}
}

export default LoginApp;