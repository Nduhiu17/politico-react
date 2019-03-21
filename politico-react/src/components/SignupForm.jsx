import React, { Component } from 'react'

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstname: '',
        lastname: '',
        othername: '',
        email: '',
        county: '',
        phonenumber: '',
        nationaid: '',
        passporturl: '',
        password:'',
        rpassword:'',
        value:''
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
        <form class="sign-up-form" onSubmit={this.handleSubmit}>
            <label>First Name</label>
            <input type="text"placeholder="Your first name" id="signup-fname"  value={this.state.firstname} name="firstname" onChange={this.handleChange} />
            <label >Last Name</label>
            <input type="text" placeholder="Your last name.." id="signup-lname" value={this.state.lastname} name="lastname" onChange={this.handleChange}/>
            <label >Other Name</label>
            <input type="text" placeholder="Your other name.." id="signup-oname" value={this.state.othername} name="othername" onChange={this.handleChange}/>
            <label >Email</label>
            <input type="email" placeholder="Your email.." id="signup-email"  value={this.state.email} name="email" onChange={this.handleChange} />
            <label >County</label>
            <input type="text" placeholder="Your county..." id="signup-county" value={this.state.county} name="county" onChange={this.handleChange} />
            <label >Phone Number</label>
            <input type="text" placeholder="Your phone number.." id="signup-phone" value={this.state.phonenumber} name="phonenumber" onChange={this.handleChange} />
            <label >National ID</label>
            <input type="text" placeholder="Your national ID.." id="signup-nationalid" value={this.state.nationalid} name="nationalid" onChange={this.handleChange}/>
            <label >Passport Url</label>
            <input type="text" placeholder="Your passport url.." id="signup-passporturl"  value={this.state.passporturl} name="passporturl" onChange={this.handleChange}/>
            <label >Password</label>
            <input type="password" placeholder="Enter password.." id="signup-password" value={this.state.password} name="password" onChange={this.handleChange}/>
            <label >Repeat Password</label>
            <input type="password" placeholder="Repeat password.." id="signup-rpassword" value={this.state.rpassword} name="rpassword" onChange={this.handleChange}/>
            <input type="submit" class="login-button" value="Sign up"/>
        </form>
      </div>
    )
  }
}
