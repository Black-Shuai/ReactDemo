import React from 'react'

export default class Footer extends React.Component{
    render() {
        var style={
            backgroundColor:'',
            textAlign:"center",
            fontSize:'18px'
        }
        return (
            <div style={style}>
                针对辅助教学系统所作的前端，版权归于私人所有
            </div>
        );
    }

}
