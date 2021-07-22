import React from 'react';
import Container from './Container';
import Footer from './Footer';
import Nav from './Nav';

function IsLogin({user_id, user_name, user_nickname}) {
    return (
        //jshint ignore:start
        <div>
            <Nav />
            <Container user_id={user_id} user_name={user_name} user_nickname={user_nickname}/>  
            <Footer />
        </div>
        //jshint ignore:end
    );
}

export default IsLogin;
