import React from 'react';
import Container from './Container';
import Footer from './Footer';
import Nav from './Nav';

function IsLogin() {
    return (
        //jshint ignore:start
        <div>
            <Nav />
            <Container />
            <Footer />
        </div>
        //jshint ignore:end
    );
}

export default IsLogin;
