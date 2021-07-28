import React, { Component } from "react";
import FileUpload from "../components/fileUpload";
import ConvertType from "../components/convertType";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import FormLabel from "@material-ui/core/FormLabel";
import Agreement from "../components/agreement";
import PrivacyPolicy from "../components/privacyPolicy";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      termsAgreed: false,
      openDialog: false,
      openPPDialog: false
    };
  }
  render() {
    const onAgreed = () => {
      this.setState({
        termsAgreed: !this.state.termsAgreed
      });
    };
    const handleDialog = () => {
      this.setState({
        openDialog: true
      });
    };
    const handlePPDialog = () => {
      this.setState({
        openPPDialog: true
      });
    };
    return (
      <>
        <div className={this.state.termsAgreed ? "mainContainer" : "mainContainer disabled"}>
          <h1>DMP Converter</h1>
          <small>Select the source file(s) to convert.</small>
          <ConvertType {...this.props} />
          <FileUpload {...this.props} />
        </div>
        <div className="center">
          <FormLabel component="legend">
            <Checkbox color="primary" inputProps={{ "aria-label": "primary checkbox" }} onClick={onAgreed} />I
            have read, understand and agree to the
            <Link href="#" onClick={handleDialog}>
              {" "}
              terms and conditions{" "}
            </Link>
            and
            <Link href="#" onClick={handlePPDialog}>
              {" "}
              privacy policy
            </Link>
          </FormLabel>
        </div>
        <Agreement open={this.state.openDialog} setOpen={(state) => this.setState(state)} />
        <PrivacyPolicy open={this.state.openPPDialog} setOpen={(state) => this.setState(state)} />
      </>
    );
  }
}

export default Main;
