import {Inferno, linkEvent} from 'inferno';
import Component from 'inferno-component';

import styles from './styles.scss';

class Login extends Component {
	constructor(props, {router}) {
		super(props);
		this.state = { auth: {email: '', password: ''} };
		this.router = router;
	}

	Login(ctx, ev) {
		if(!ctx.state.auth.password)
			return false;

		localStorage.auth = "logged";

		ctx.router.push('/');
	}

	UpdateProp(ctx, ev) {
		ctx.state.auth[ev.target.id] = ev.target.value;
		ctx.setState(ctx.state);
	}

	render() {
		return(
		<div class="ma-40 ma-cl-h">
			<div class="col-12 center-text">
				<h3>Login</h3>
			</div>
			<div class="col-12">
				<form>
					<div class="row">
						<div class="col-6 col-offset-3">
							<label for="exampleEmailInput">Your email</label>
							<input class="full-width" onInput={linkEvent(this, this.UpdateProp)} type="email" placeholder="Email" id="email" />
						</div>
						<div class="col-6 col-offset-3">
							<label for="exampleEmailInput">Password</label>
							<input class="full-width" onInput={linkEvent(this, this.UpdateProp)} type="password" placeholder="Password" id="password" />
						</div>
						<div class="col-6 col-offset-3 center-text">
					      	<input type="button" class="button-primary" onClick={linkEvent(this, this.Login)} value="Login"/>
						</div>
					</div>
				</form>
			</div>
			<div class="col-12 center-text login-hit">
				<small>(type any email and any password and hit login)</small>
			</div>
		</div>
			);
	}
}

export default Login;