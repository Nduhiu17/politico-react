import React, {Component} from 'react';

export default class SigninForm extends Component {
      constructor(props) {
    super(props);
    this.state = {
        email: '',
        password:''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(event) {
    let form = event.target.name;
    let state = {};
    state[form] = event.target.value;

    this.setState(state);
}

handleSubmit(event) {
    event.preventDefault();
    this.props.submitForm(this.state);
}
    render() {
        return (
            <div>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type="email" placeholder="Your email.." id="login-email" value={this.state.email} name="email" onChange={this.handleChange} />
                        <label>Password</label>
                        <input type="password" placeholder="Enter password.." id="login-password" value={this.state.password} name="password" onChange={this.handleChange} />
                            <p className="reset-password-login">Forgot your password?Click <a
                                href="reset-password.html">here to create</a> a new password.</p>
                    <input type="submit" className="login-button" value="Sign up" />
                </form>
            </div>
        );
    }
}

