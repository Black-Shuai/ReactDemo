import React from 'react'
import { Upload, Button, Icon,message } from 'antd';

export default class MultiUpload extends React.Component {
    state = {
        fileList: [],
    };

    handleChange = info => {
        let fileList = [...info.fileList];

        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-2);

        // 2. Read from response and show file link
        fileList = fileList.map(file => {
            // if (file.response) {
            //     // Component will show file.url as link
            //     file.url = file.response;
            // }
            if (info.file.status !== 'uploading') {
                file.url=file.response
                console.log(info.file.response);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
            return file;
        });
        console.log(fileList)
        this.setState({ fileList });
    };
    render() {
        const props = {
            action: 'http://localhost:8810/api/arrange/upload',
            onChange: this.handleChange,
            multiple: true,
        };
        return (
            <div>
                <Upload {...props} fileList={this.state.fileList}>
                    <Button>
                        <Icon type="upload" /> Upload
                    </Button>
                </Upload>
            </div>
        );
    }
}