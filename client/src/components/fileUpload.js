import React, { Component } from "react";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
const Url = process.env.PUBLIC_URL;

const FilePondLanguage = {
  labelIdle: `Drag&Drop or  <span class="filepond--label-action">Browse</span> your file exported from DMPonline in .TXT format.`,
};
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
        <FilePond {...FilePondLanguage} allowMultiple={true} server={server} />
      </div>
    );
  }
}

export default FileUpload;
