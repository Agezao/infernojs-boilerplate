import {Inferno, linkEvent} from 'inferno';
import Component from 'inferno-component';
import {Link} from 'inferno-router';

import UserService from '../../services/user.service';
import styles from './styles.scss';

class Users extends Component {
	constructor(props) {
		super(props);
		this.state = {users: []};
	}

	componentWillMount() {
		this.RefreshList();
	}

	RefreshList() {
		this.state.users = new UserService().List();
		this.setState(this.state);	
	}

	DeleteUser(params) {
		let user = params[0];
		let ctx = params[1];

		if(!confirm("Delete " + user.name + "?"))
			return false;

		new UserService().Delete(user.id);
		ctx.RefreshList();
	}

	render() {
		const userList = [];
		for (let i = 0; i < this.state.users.length; i++) {
			userList.push(
				<tr>
					<th>
						<Link to={"/users/" + this.state.users[i].id}><i class="ion-edit"></i></Link>
						<a onClick={linkEvent(([this.state.users[i], this]), this.DeleteUser)}><i class="ion-trash-a pd-10 pd-cl-v"></i></a>
					</th>
					<td>{this.state.users[i].name}</td>
					<td>{this.state.users[i].age}</td>
					<td>{this.state.users[i].location}</td>
				</tr>
			);
		}

		return(
      <div class="pd-20 overflow-hidden users-list">
      	<h3>Users</h3>
      	<div class="row overflow-hidden">
      		<Link class="button sm pull-right ion-plus-round" to="/users/new/">New</Link>
      	</div>
      	<div class="row">
			<table class="full-width">
				<thead>
					<tr>
						<th></th>
						<th>Name</th>
						<th>Age</th>
						<th>Location</th>
					</tr>
				</thead>
				<tbody>
					{userList}
				</tbody>
			</table>
      	</div>
      </div>
		);
	}
}

export default Users;