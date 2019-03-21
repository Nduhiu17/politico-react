import React, { Component } from 'react'
import Footer from './Footer';
import SignupBody from './SignupBody';
import SignupHeader from './SignupHeader';

export default class SignupPage extends Component {
  render() {
    return (
      <div>
        <SignupHeader/>
        <SignupBody/>
        <Footer/>
      </div>
    )
  }
}
