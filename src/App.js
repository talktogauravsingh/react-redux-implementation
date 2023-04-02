import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { clearSnackBar, showSnackBar } from './store/snackbar/action';
import { useEffect, useRef } from 'react';
import  CustomizedSnackbars  from './components/snackbar';

function App(props) {
  const ref = useRef(null);
  useEffect(() => {
    props.showSnackBar({
      open: true,
      autoHideDuration: 5000,
      severity: "success",
      message: "messagggeeeesss",
    });
    
    
    DataService.initializeSubscriber(
      (data) => {
        switch (data.msgType) {
          case "Dashboard":
            setVisibility("Dashboard");
            break;
          default:
        }
      },
      (error) => {
        props.showSnackbar({
          open: true,
          autoHideDuration: 10000,
          severity: "error",
          message: error,
        });
      }
    );
    
  }, []);
  
  useEffect(() => {
    console.log('snackbardATA', props.snackBarData);
    ref.current = props.snackBarData;
    console.log('ref', ref);
    DataService.ServiceInst?.next({
      msgType: "Dashboard",
      payLoad: "",
    });
  }, [props.snackBarData]);
  return (
    <div className="App">
      <h1>Hello Redux!</h1>
      <CustomizedSnackbars />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    snackBarData: state.snackBarData
  }
}

export default connect(mapStateToProps, {
  showSnackBar,
  clearSnackBar
})(App);
