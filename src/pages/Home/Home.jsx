import React from 'react'
import {Row, Col, Card} from 'antd';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import NavLeft from '../../components/NavLeft/NavLeft'
import './Home.less'
export default class Home extends React.Component{
    render() {
        return(
                <Row className="container">
                    <Col span={3}  className="nav-left">
                        <NavLeft/>
                    </Col>
                    <Col span={21}>
                        <Col className="header"><Header/></Col>
                        <Col className="main">
                            <Card style={{height:"100%",width:"100%"}}>
                                { this.props.children }
                            </Card>
                        </Col>
                        <Col className="footer"><Footer/></Col>
                    </Col>
                </Row>
        );
    }
}
