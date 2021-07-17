import React from 'react'
import ContainerMain from './ContainerMain'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import './Container.css';

function Container() {
    return (
        <div id="container" className="community">
            <LeftSide />
            <RightSide />
            <ContainerMain />
        </div>
    )
}

export default Container
