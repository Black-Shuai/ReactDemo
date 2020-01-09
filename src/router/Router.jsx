import React from 'react'
import {HashRouter,Route,Switch} from "react-router-dom";
import {Redirect} from "react-router"
import Login from '../pages/Login'
import Home from '../pages/Home/Home'
import Buttons from '../pages/UI/Buttons'
import Main from  '../components/Main/Main'
import VisitNumber from '../components/Main/Chart/PayNumber'
import Video from '../pages/Video/Video'
import MultiUpload from '../pages/Video/MultiUpload'
import App from '../App'
export default class Router extends React.Component{

    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route exact={true} path="/" component={Login}/>
                        <Route render={props =>
                            <Home path='/home'>
                                <Redirect exact from="/home" to="/main"/>
                                <Route exact={true} path='/main' component={Main}/>
                                <Route exact={true} path='/buttons' component={Buttons}/>
                                <Route exact={true} path='/VisitNumber' component={VisitNumber}/>
                                <Route exact={true} path='/Video' component={Video}/>
                                <Route exact={true} path='/MultiUpload' component={MultiUpload}/>
                            </Home>
                        }/>
                    </Switch>
                </App>
            </HashRouter>
        );
    }

}
