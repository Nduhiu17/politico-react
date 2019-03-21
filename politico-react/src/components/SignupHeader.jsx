import React, { Component } from 'react'

export default class SignupHeader extends Component {
  render() {
    return (
      <div>
            <div class="navbar">
            <div class="nav-logo">
                <div class="logo-img">
                    <img src={require('../images/logo.jpg')} class="logo" alt="logo" />
                </div>
                <div class="logo-text">
                    Politico
                </div>
            </div>
            <div class="nav-items">
                <div class="sign-up">
                </div>
                <div class="sign-in">
                </div>
                <div class="profile-div">
                </div>
                <div class="profile-div">
            <a href="signin.html">Sign in</a> 
                </div>
            </div>
        </div>
      </div>
    )
  }
}
