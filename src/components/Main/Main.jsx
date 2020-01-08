import React from 'react'
import { Card, Row, Col, Icon, Tooltip, Divider,Progress } from 'antd'
import VisitNumber from './Chart/VisitNumber'
import PalNumber from './Chart/PayNumber'
import SaleNumber from './Chart/SaleNumber'
import './Main.less'
export default class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Row gutter={16}>
                    <Col span={6}  >
                        <Card id='xcard'>
                            <Col span={12} style={{ padding: "5px 0", fontSize: "14px" }}>总销售额</Col><Col span={12} style={{ textAlign: "right" }}><Tooltip title="指标说明"><Icon type="question-circle" /></Tooltip></Col>
                            <Col span={24} style={{ padding: "5px 0", fontSize: "30px" }}>￥126,560</Col>
                            <Col span={24} style={{ padding: "5px 0 10px 0", fontSize: "14px" }}><Col span={8} style={{ padding: "0" }}>周同比12%</Col><Col span={16}>日同比11%</Col></Col>
                            <Divider style={{ margin: "12px 0" }} />
                            <Col span={24} style={{ padding: "0", fontSize: "14px" }}>日销售额￥12,124</Col>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Col span={12} style={{ padding: "5px 0", fontSize: "14px" }}>访问量</Col><Col span={12} style={{ textAlign: "right" }}><Tooltip title="指标说明"><Icon type="question-circle" /></Tooltip></Col>
                            <Col id='getw' span={24} style={{ padding: "5px 0", fontSize: "30px" }}>￥126,560</Col>
                            <Col span={24} style={{ padding: "5px 0 10px 0", fontSize: "14px" }}><VisitNumber/></Col>
                            <Divider style={{ margin: "12px 0" }} />
                            <Col span={24} style={{ padding: "0", fontSize: "14px" }}>日访问量 1,234</Col>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Col span={12} style={{ padding: "5px 0", fontSize: "14px" }}>支付笔数</Col><Col span={12} style={{ textAlign: "right" }}><Tooltip title="指标说明"><Icon type="question-circle" /></Tooltip></Col>
                            <Col span={24} style={{ padding: "5px 0", fontSize: "30px" }}>8,846</Col>
                            <Col span={24} style={{ padding: "5px 0 10px 0", fontSize: "14px" }}><PalNumber/></Col>
                            <Divider style={{ margin: "12px 0" }} />
                            <Col span={24} style={{ padding: "0", fontSize: "14px" }}>转化率 60%</Col>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                            <Col span={12} style={{ padding: "5px 0", fontSize: "14px" }}>运营活动效果</Col><Col span={12} style={{ textAlign: "right" }}><Tooltip title="指标说明"><Icon type="question-circle" /></Tooltip></Col>
                            <Col span={24} style={{ padding: "5px 0", fontSize: "30px" }}>￥126,560</Col>
                            <Col span={24} style={{ padding: "5px 0 10px 0", fontSize: "14px" }}> <Progress percent={50} showInfo={false} /></Col>
                            <Divider style={{ margin: "12px 0" }} />
                            <Col span={24} style={{ padding: "0", fontSize: "14px" }}><Col span={8} style={{ padding: "0" }}>周同比12%</Col><Col span={16}>日同比11%</Col></Col>
                        </Card>
                    </Col>
                </Row>
                <Row style={{paddingTop:15}}>
                    <Card>
                        <SaleNumber/>
                    </Card>
                </Row>
            </div>
        );
    }

}
