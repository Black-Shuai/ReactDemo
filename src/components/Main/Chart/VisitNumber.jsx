import React from 'react'
import echarts from 'echarts'

export default class VisitNumber extends React.Component {
    componentDidMount(){
        this.initEchartt();
    }
    initEchartt=()=>{
        var myChartx = echarts.init(document.getElementById('main'));

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
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['2020-1-7', '2020-1-8', '2020-1-9', '2020-1-10', '2020-1-11', '2020-1-12', '2020-1-13'],
                show:false
            },
            yAxis: {
                type: 'value',
                show:false
            },
            series: [{
                data: [7, 5, 4, 5, 2, 7, 5],
                type: 'line',
                areaStyle: {},
                smooth: true,
                // 标注数据
                // label: {
                //     normal: {
                //         show: true,
                //         position: 'top'
                //     }
                // }
            }]
        };
        
        myChartx.setOption(option);
        window.onresize=myChartx.resize//自适应父组件宽度
        console.log("更新完毕")
    }
    render() {
        return (
            <div id='main' style={{height:21}}></div>
        );
    }
}