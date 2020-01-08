import React from 'react'
import { Row, Col, List, Typography, Button, Menu, Icon, Divider } from 'antd'
import FreeScrollBar from 'react-free-scrollbar';
import echarts from 'echarts'
export default class SaleNumber extends React.Component {
    state = {
        current: 'mail',
    };
    componentDidMount() {
        this.initEchart();
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    initEchart = () => {
        var myChart = echarts.init(document.getElementById('sale'));
        var option = {
            title: {
                text: '销售趋势'
            },
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };
        myChart.setOption(option);
        window.onresize = myChart.resize
    }
    render() {
        const data = [
            { name: 'Racing car sprays burning fuel into crowd.', time: '2019' },
            { name: 'Racing car sprays burning fuel into crowd.', time: '2019' },
            { name: 'Racing car sprays burning fuel into crowd.', time: '2019' },
            { name: 'Racing car sprays burning fuel into crowd.', time: '2019' },
            { name: 'Racing car sprays burning fuel into crowd.', time: '2019' },
            { name: 'Racing car sprays burning fuel into crowd.', time: '2019' },
            { name: 'Racing car sprays burning fuel into crowd.', time: '2019' },
            { name: 'Racing car sprays burning fuel into crowd.', time: '2019' },
            { name: 'Racing car sprays burning fuel into crowd.', time: '2019' },
            { name: 'Racing car sprays burning fuel into crowd.', time: '2019' },
            { name: 'Racing car sprays burning fuel into crowd.', time: '2019' },
            { name: 'Racing car sprays burning fuel into crowd.', time: '2019' },
        ];
        return (
            <div>
                <Row style={{ paddingBottom: 20 }}>
                    <Col span={14}>
                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            <Menu.Item key="mail">
                                <Icon type="mail" />
                                销售额
                            </Menu.Item>
                            <Menu.Item key="app">
                                <Icon type="appstore" />
                                访问量
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={10}>
                        <Button>今日</Button>
                        <Divider style={{ marginTop: 16 }} />
                    </Col>
                </Row>
                <Row>
                    <Col span={16}>
                        <div id='sale' style={{ height: 400 }} />
                    </Col>
                    <Col span={8} style={{ height: 330 }}>
                        <h3 style={{ marginBottom: 16 }}>门店销售额排名</h3>
                        <FreeScrollBar>
                            <List
                                bordered
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <Typography.Text mark>[ITEM]</Typography.Text> {item.name}
                                    </List.Item>
                                )}
                            />
                        </FreeScrollBar>
                    </Col>
                </Row>
            </div>
        )
    }
}