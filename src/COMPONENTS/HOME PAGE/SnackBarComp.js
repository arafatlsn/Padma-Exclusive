import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { IconButton } from "@mui/material";
import { MdClose } from "react-icons/md";

const SnackBarComp = ({ showSnackBar, setShowSnackBar, message }) => {
  const handleClose = () => {
    setShowSnackBar(false);
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <MdClose className="text-[1.2rem]" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <Snackbar
      open={showSnackBar}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
};

export default SnackBarComp;
