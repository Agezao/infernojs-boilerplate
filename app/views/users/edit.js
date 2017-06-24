import {Inferno, linkEvent} from 'inferno';
import Component from 'inferno-component';
import UserService from '../../services/user.service';

class UsersEdit extends Component {
	constructor(props, {router}) {
		super(props);
		let newuser = this.NewUserModel();
		this.state = {userId: props.params.userId, user: newuser};
		this.router = router;
	}

	componentWillMount() {
		if(this.state.userId && this.state.userId != 'new')
			this.state.user = new UserService().Get(this.state.userId);
		
		this.setState(this.state);
	}

	NewUserModel() {
		return {
			id: null,
			name: null,
			age: null,
			location: null
		};
	}

	UpdateProp(ctx, ev) {
		ctx.state.user[ev.target.id] = ev.target.value;
		ctx.setState(ctx.state);
	}

	Save(ctx, ev) {
		new UserService().Save(ctx.state.user);
		ctx.router.push('/users');
	}

	render() {
		return(
      <div class="overflow-hidden">
      	<form>
      		<div class="row">
		      <div class="col-12 pd-5 pd-cl-v">
		        <input class="full-width lg clear center-text" type="text" onInput={linkEvent(this, this.UpdateProp)} value={this.state.user.name} placeholder="User Name" id="name" />
		      </div>
		    </div>
		    <div class="row">
		      <div class="col-6 pd-5 pd-cl-v">
		        <label for="exampleEmailInput">Location</label>
		        <input class="full-width clear" type="text" onInput={linkEvent(this, this.UpdateProp)} value={this.state.user.location} placeholder="location" id="location" />
		      </div>
		      <div class="col-6 pd-5 pd-cl-v">
		        <label for="exampleEmailInput">Age</label>
		        <input class="full-width clear" type="text" onInput={linkEvent(this, this.UpdateProp)} value={this.state.user.age} placeholder="age" id="age"/>
		      </div>
		    </div>
		    <div class="row">
		      <div class="col-12 pd-10">
		      	<input type="button" class="button-primary" onClick={linkEvent(this, this.Save)} value="Save"/>
		      </div>
	        </div>
      	</form>
      </div>
		);
	}
}

export default UsersEdit;