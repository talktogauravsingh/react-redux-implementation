import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { connect } from 'react-redux';
import { clearSnackBar } from '../store/snackbar/action';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomizedSnackbars = (props) => {
  const handleClose = () => {
    props.clearSnackBar();
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={props.snackBarData.open} autoHideDuration={props.snackBarData.autoHideDuration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.snackBarData.severity} sx={{ width: '100%' }}>
          { props.snackBarData.message }
        </Alert>
      </Snackbar>
    </Stack>
  );
}

const mapStateToProps = (payload) => {
    return {
        snackBarData : payload.snackBarData
    }
}

export default connect(mapStateToProps, {
    clearSnackBar
})(CustomizedSnackbars);