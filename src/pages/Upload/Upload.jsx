import React from 'react'
import { Row, Col, Upload, message, Button, Icon, Card } from 'antd';
import {getmess} from '../../api/api_upload'
const props = {
    name: 'file',
    action: 'http://120.25.122.173:8810/api/arrange/upload',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file.response);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
export default class Video extends React.Component {
    componentDidMount(){
        this.getmessage()
    }
    state = {
        fileList: [],
    };
    handleChange = info => {
        let fileList = [...info.fileList];
        // console.log(info)
        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-2);
        // 2. Read from response and show file link
        fileList = fileList.map(file => {
            if (file.response) {
                // Component will show file.url as link
                file.url = file.response;
            }
            return file;
        });
        this.setState({ fileList });
    };
    state={
            id:"1",
        }
    getmessage=()=>{
        // console.log(this.state.id)
         getmess({"t_id":this.state.id}).then((res)=>{
            if(res!==[]){
                this.setState({
                    videoCard:this.renderCard(res)
                })
            }
        })
    }
    renderCard=(data)=>{
        return data.map((item)=>{
            return (
                <Col span={8} style={{marginTop:15}} key={item.id}>
                <Card title={item.title} bordered={false}>
                    {item.detail}
                </Card>
            </Col>
            )
        })
    }
    render() {
        const xprops = {
            action: 'http://120.25.122.173:8810/api/arrange/upload',
            onChange: this.handleChange,
            multiple: true,
        };
        return (
            <div>
                <Card>
                    <Row>
                        <Col span={12}>
                            <Upload {...props}>
                                <Button>
                                    <Icon type="upload" /> 单文件上传
                    </Button>
                            </Upload></Col>
                        <Col span={12}>
                            <Upload {...xprops} fileList={this.state.fileList}>
                                <Button>
                                    <Icon type="upload" /> 多文件上传
                    </Button>
                            </Upload></Col>
                    </Row>
                </Card>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={16}>
                        {this.state.videoCard}
                    </Row>
                </div>
           </div>
        );
    }
}