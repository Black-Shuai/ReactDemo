import React from 'react'
import { Menu } from 'antd';
import './NavLeft.less'
import MenuConfig from '../../resource/MenuConfig'
import {NavLink} from 'react-router-dom'
const SubMenu = Menu.SubMenu
export default class NavLeft extends React.Component{
    componentWillMount() {
        const menuTreeNode=this.renderMenu(MenuConfig);

        this.setState({
            menuTreeNode
        })
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
        <div>
            <div className='logo'>
                <img src="/assets/15.jpg" alt=""/>
                <h1>diy网页</h1>
            </div>
            <Menu theme="dark">
                {this.state.menuTreeNode}
            </Menu>
        </div>
        );
    }

}
