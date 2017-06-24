import {Inferno} from 'inferno';
import Component from 'inferno-component';
import UserService from '../../services/user.service';

class UsersEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {userId: props.params.userId, user: null};
	}

	componentWillMount() {
		if(this.state.userId)
			this.state.user = new UserService().Get(this.state.userId);
		
		this.setState(this.state);
	}

	render() {
		return(
      <div class="overflow-hidden">
      	users details {this.state.userId}
      	{this.state.user ? this.state.user.name : ''}
      </div>
		);
	}
}

export default UsersEdit;