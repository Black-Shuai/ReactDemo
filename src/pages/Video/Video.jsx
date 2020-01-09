import React from 'react'
import { Upload, message, Button, Icon, Card } from 'antd';
const props = {
    name: 'file',
    action: 'http://localhost:8810/api/arrange/upload',
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

    render() {
        return (
            <Card style={{ minHeight: "82vh" }}>
                <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>
            </Card>
        );
    }
}