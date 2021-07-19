import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Agreement(props) {
  const { open, setOpen } = props;
  const handleClose = () => {
    setOpen({ openDialog: false });
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
        <DialogTitle id="alert-dialog-title">DMP Converter terms & conditions</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            MIT License
            <br />
            <br />
            Copyright (c) 2020 DMP Converter
            <br />
            <br />
            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
            associated documentation files (the "Software"), to deal in the Software without restriction,
            including without limitation the rights to use, copy, modify, merge, publish, distribute,
            sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:
            <br />
            <br />
            The above copyright notice and this permission notice shall be included in all copies or
            substantial portions of the Software.
            <br />
            <br />
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
            NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
            DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
            OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
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
