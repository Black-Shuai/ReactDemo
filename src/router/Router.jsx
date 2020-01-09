import React from 'react'
import {HashRouter,Route,Switch} from "react-router-dom";
// import {Redirect} from "react-router"
import Login from '../pages/Login'
import Home from '../pages/Home/Home'
import Buttons from '../pages/UI/Buttons'
import Main from  '../components/Main/Main'
import VisitNumber from '../components/Main/Chart/PayNumber'
import Upload from '../pages/Upload/Upload'
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
                                <Route exact={true} path='/main' component={Main}/>
                                <Route exact={true} path='/buttons' component={Buttons}/>
                                <Route exact={true} path='/VisitNumber' component={VisitNumber}/>
                                <Route exact={true} path='/upload' component={Upload}/>
                                {/* <Redirect exact from="/home" to="/main"/> */}
                            </Home>
                        }/>
                    </Switch>
                </App>
            </HashRouter>
        );
    }

}
