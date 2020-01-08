import React from 'react'
import echart from 'echarts'
export default class PalNumber extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // w:document.body.clientWidth
        }
    }
    componentDidMount(){
        this.initEchartx();
    }
    initEchartx=()=>{
        var myChart = echart.init(document.getElementById('main2'));

        // 指定图表的配置项和数据
        var option = {
            color: ['#8EC9EB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            //图形距离四边的距离
            grid:{
                top:0,
                bottom:0,
                left:0,
                right:0
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                }
            ],
            yAxis: 
                {
                    type: 'value',
                    show:false
                },
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '50%',
                    data: [10, 52, 200, 334, 390, 330, 220]
                }
            ]
        };
        
        myChart.setOption(option);
        window.onresize=myChart.resize
    }
    render(){
        return (
            <div id='main2' style={{height:21}}></div>
        );
    }
}