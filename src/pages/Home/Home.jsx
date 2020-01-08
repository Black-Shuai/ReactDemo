import React from 'react'
import {Row, Col} from 'antd';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavLeft from '../../components/NavLeft/NavLeft'
import './Home.less'
export default class Home extends React.Component{
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
