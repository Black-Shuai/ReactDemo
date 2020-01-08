import React from 'react'
import { Menu } from 'antd';
import './NavLeft.less'
import MenuConfig from '../../resource/MenuConfig'
import Menuconf from '../../resource/MenuConf'
import {NavLink} from 'react-router-dom'
const SubMenu = Menu.SubMenu
export default class NavLeft extends React.Component{
    componentWillMount() {
        // const menuTreeNode=this.renderMenu(MenuConfig);

        // this.setState({
        //     menuTreeNode
        // })
        this.selectMenu(sessionStorage.getItem('code'))
    }
    //根据权限选择菜单
    selectMenu=(data)=>{
        // console.log(data)
        if(data==='0'){
           this.setState({
            menuTreeNode:this.renderMenu(Menuconf)
           })
        }else{
            this.setState({
                menuTreeNode:this.renderMenu(MenuConfig)
            })
        }
    }
    //菜单渲染（递归）
    renderMenu=(data)=>{
        return data.map((item)=>{
            if (item.children){
                return (
                        <SubMenu title={item.title} key={item.key}>
                            {this.renderMenu(item.children)}
                        </SubMenu>
                    )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }
    render() {
        // var style={
        //     backgroundColor:'blue'
        // }
        return (
            /*<div style={style}>*/
        <div style={{height:"100%",width:"100%",position:"absolute"}}>
            <div className='logo' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img src="/assets/logo.svg" alt=""/>
                <h1>Ant Design Pro</h1>
            </div>
            <Menu theme="dark" mode="inline">
                {this.state.menuTreeNode}
            </Menu>
        </div>
        );
    }

}
