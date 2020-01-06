import React from 'react'
import {Row,Col} from 'antd'
import './Header.less'
import Util from '../../utils/utils'
import Axios from 'axios'
export default class Header extends React.Component{
    componentWillUnmount(){
        clearInterval(this.getDate)//消除下面定义的计时器造成的内存泄漏
    }
    constructor(props){
        super(props)
        this.state={
            name:"Black_Shuai"
        }
        this.getDate=setInterval(()=>{
            let sysTime=Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherApiData();
    }

    getWeatherApiData(){
       new Promise((resolve,reject)=>{
           Axios({
               method:'get',
               url:'https://restapi.amap.com/v3/weather/weatherInfo?city=321102&key=c4a157a19ae2a58486a56d1274584267',
           }).then(res=>{
               this.setState({
                   weather:res.data.lives[0].weather
               })
           })
       })
    }

    render() {
        // var style={
        //     backgroundColor:'red'
        // }
        return (
            /*<div style={style}>*/
        <div className="header">
            <Row className="header-top">
                <Col>
                    <span>欢迎，{this.state.name}</span>
                    <a href='/#/'>退出</a>
                </Col>
            </Row>
            <Row className="breadcrumb">
                <Col span={4} className="breadcrumb-title">首页</Col>
                <Col span={20} className="weather">
                    <Col span={23}><span style={{'paddingRight':'20px'}}>{this.state.sysTime}</span></Col>
                    <span>{this.state.weather}</span>
                </Col>
            </Row>
        </div>
        );
    }

}
