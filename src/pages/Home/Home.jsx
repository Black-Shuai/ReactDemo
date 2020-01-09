import React from 'react'
import {Row, Col} from 'antd';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavLeft from '../../components/NavLeft/NavLeft'
import {withRouter} from "react-router-dom";//给组件属性props提供history方法
import './Home.less'
class Home extends React.Component{
    componentDidMount(){
        this.getHistoryRouter()
    }
    getHistoryRouter=()=>{
        if(sessionStorage.getItem('path')==='login'){//由于找不到好的刷新方法，每次f5都转到重定向的页面，所以只能手动重定向
            sessionStorage.removeItem('path')
            this.props.history.push('/main')
        }
    }
    render() {
        return(
                <Row className="container">
                    <Col span={4}  className="nav-left">
                        <NavLeft/>
                    </Col>
                    <Col span={20}>
                        <Col className="header"><Header/></Col>
                        <Col className="main">
                            <div style={{height:"100%",width:"100%"}}>
                                { this.props.children }
                            </div>
                        </Col>
                        <Col className="footer"><Footer/></Col>
                    </Col>
                </Row>
        );
    }
}
export default withRouter(Home);