import React, { Component } from 'react'
import SignupForm from './SignupForm';
import SigninForm from "./SigninForm";


export default class SigninBody extends Component {
  constructor (props) {
    super(props);
    this.state = {
        formData: {},
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
}

handleFormSubmit(formData) {
    this.setState({ formData: formData});
    fetch('https://politico-api-server.herokuapp.com/api/v2/auth/login', {
      method: 'POST',
      headers : new Headers(),
      body:JSON.stringify(formData)
  })
  .then((res) => res.json())
  .then((data) =>  {
    if(data.error){
      window.alert(data.error)
    }
    if(data.message){
      window.alert(data.message)
    }
  })
  .catch((err)=>{
    alert("Make sure you are connected to the internet")
  })

}

  render() {
    return (
      <div>
          <div className="main-form-container">
              <div className="left-form-container">

              </div>
              <div className="container-form">
                  <div className="sign-in-heading">
                      Login
                  </div>
              <SigninForm submitForm={this.handleFormSubmit}/>
              </div>
              <div className="right-form-container">

              </div>
          </div>
      </div>
    )
  }
}


 <SignupForm submitForm={this.handleFormSubmit}/>