import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

const Message = ({ handleClose, open, message, severity }) => {
    
    return ( <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{      width: '100%' }}>
          { message }
        </Alert>
      </Snackbar> );
}
 
export default Message;