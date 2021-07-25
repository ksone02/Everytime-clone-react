import React from 'react'
import ContainerMain from './ContainerMain'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import './Container.css';
import { Route } from 'react-router-dom';
import MyArticles from './MyArticles';
import ArticlesPlus from './ArticlesPlus';
import HotArticles from './HotArticles';

function Container({user_id, user_name, user_nickname}) {
    return (
        <div id="container" className="community">
            <Route path="/main" exact>
                <LeftSide user_id={user_id} user_name={user_name} user_nickname={user_nickname}/>    
            </Route>
            <RightSide />
            <Route path="/main/myarticles" exact>
                <MyArticles user_nickname={user_nickname}/>
            </Route>
            <Route path="/main/hotarticles" exact>
                <HotArticles />
            </Route>
            <Route path="/main/board/:boardNum" exact>
                <ContainerMain user_id={user_id} user_name={user_name} user_nickname={user_nickname}/>    
            </Route>
            <Route path="/main/board/:boardNum/:userId" exact render={() => <ArticlesPlus />} />
        </div>
    )
}

export default Container
