import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function PrivacyPolicy(props) {
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen({ openPPDialog: false });
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth="true"
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">DMPConverter Privacy Policy</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{ textAlign: "justify" }}>
            <strong>Our contact </strong>
            <br />
            ELIXIR Belgium <br />
            VIB-UGent Center for Plant Systems Biology (PSB) <br />
            Technologiepark 71, <br />
            9052 Zwijnaarde <br />
            Phone: +32 (0)9 331 36 94 <br />
            Email: datahub@elixir-belgium.org <br />
            <br />
            <strong>Type of personal information we collect </strong>
            <br />
            We collect and process the data contained in the file uploaded by the user to convert the format
            of the file. <br />
            We don't receive nor store any other personal information. <br />
            <br />
            <strong>How we store your personal information</strong> <br />
            The data contained in the file uploaded by the user is securely stored in the website server
            storage for 15 minutes. <br />
            <br />
            We keep the data contained in the file uploaded by the user for 15 minutes after the user has
            started the conversion of a file with DMPConverter. After this period of time, all data will be
            automatically deleted. <br />
            We don't store any other personal information. We only store the converted file for 15 minutes in
            order to be available for the user to download. <br />
            <br />
            The data contained in the file uploaded by the user will not be provided to third parties, unless
            there is an appropriate legal ground for it, or you have given your explicit consent.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
