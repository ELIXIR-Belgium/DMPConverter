import React, { Component } from "react";
import FileUpload from '../components/fileUpload'
import ConvertType from '../components/convertType'
class Main extends Component {
    render() {
        return (
            <div className="mainContainer">
                <h1>DMP Converter</h1>
                <small>Select the source file(s) to convert.</small>
                <ConvertType {...this.props} />
                <FileUpload {...this.props} />
            </div>
        )
    }

}

export default Main