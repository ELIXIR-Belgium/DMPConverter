import React, { Component } from "react";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
const Url = process.env.PUBLIC_URL;

class FileUpload extends Component {
  render() {
    const { selectedFunder } = this.props;
    const server = {
      url: `${Url}/convert/${selectedFunder}`,
      process: {
        onload: (res) => {
          var iframe = document.createElement("iframe");
          iframe.id = "iframe" + Math.random();
          iframe.style.display = "none";
          document.body.appendChild(iframe);
          iframe.src = `${Url}/download/${res}.pdf`;
        },
      },
    };
    return (
      <div className="uploadContainer">
        <FilePond allowMultiple={true} server={server} />
      </div>
    );
  }
}

export default FileUpload;
