import React, {Component} from 'react';
import SigninHeader from './SigninHeader';
import SigninBody from './SigninBody';
import Footer from './Footer';

export default  class SigninPage extends Component {
    render() {
        return (
            <div>
                <SigninHeader/>
                <SigninBody/>
                <Footer/>
            </div>
        );
    }
}

