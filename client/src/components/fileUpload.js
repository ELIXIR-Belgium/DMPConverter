import React, { Component } from "react";
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

class FileUpload extends Component {
    render() {
        const { selectedFunder } = this.props
        const server = {
            url: `http://localhost:3000/convert/${selectedFunder}`,
            process: {
                onload: (res) => {
                    var iframe = document.createElement('iframe');
                    iframe.id = "iframe" + Math.random();
                    iframe.style.display = 'none';
                    document.body.appendChild(iframe);
                    iframe.src = `http://localhost:3000/download/${res}.pdf`;
                }
            }
        }
        return (
            <div className="uploadContainer">
                <FilePond allowMultiple={true} server={server} />
            </div>
        )
    }
}

export default FileUpload