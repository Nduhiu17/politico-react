import React, { Component } from 'react'
import SignupForm from './SignupForm';


export default class SignupBody extends Component {
  constructor (props) {
    super(props);
    this.state = {
        formData: {},
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
}

handleFormSubmit(formData) {
    this.setState({ formData: formData});
    fetch('https://politico-api-server.herokuapp.com/api/v2/auth/signup', {
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
        <div class="main-form-container">
            <div class="left-form-container">

            </div>
            <div class="container-form">
                <div class="sign-up-heading">
                    Register 
                </div>
            <SignupForm submitForm={this.handleFormSubmit}/>      
            </div>
            <div class="right-form-container">

            </div>
        </div>
      </div>
    )
  }
}
