import React from 'react'
import { Form, Input, Button, Checkbox,Card,Icon } from 'antd';
import {api_login} from "../api/api_Login";
// import Axios from "axios";

class Login extends React.Component{

     handleSubmit=()=>{
        let userInfo=this.props.form.getFieldsValue();
        // console.log(userInfo)
        this.login(userInfo)
    }
    login=async (userInfo)=>{
         api_login(userInfo,true).then((res)=>{
             if (res.data.code!==1){
                 this.props.history.push('/home')
             }
         })
        // await new Promise((resolve,reject)=>{
        //     Axios({
        //         method:'post',
        //         url:'http://120.25.122.173:8810/api/login',
        //         data:userInfo
        //     }).then(res=>{
        //         if(res.data.code!==1)
        //         this.props.history.push('/home')
        //     })
        // })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        var style={
            width:'100%',
            height:'100vh',
            backgroundImage:"url("+require("../resource/assets/月亮.jpg")+")",
            display:"flex",
            // top:"20%",
            // alignItems:"center",
            justifyContent:"center"
        }
        return (
            <div style={style}>
                <Card style={{width:"25%",height:"38%",minHeight:"350px", margin:"8%",}}>
                    <Form>
                        <Form.Item style={{display:"flex",justifyContent:"center"}}>
                                <h1>欢迎登录</h1>
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                            <br/>
                            <div style={{textAlign:"center"}}>
                                <Button type="primary" onClick={this.handleSubmit} style={{textAlign:"center",width:"80%"}}>
                                登录
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }

}
export default Form.create({ name: 'normal_login' })(Login);
