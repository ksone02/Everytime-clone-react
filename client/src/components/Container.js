import React from 'react'
import ContainerMain from './ContainerMain'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import './Container.css';

function Container({user_id, user_name, user_nickname}) {
    return (
        <div id="container" className="community">
            <LeftSide user_id={user_id} user_name={user_name} user_nickname={user_nickname}/>
            <RightSide />
            <ContainerMain user_nickname={user_nickname}/>
        </div>
    )
}

export default Container
