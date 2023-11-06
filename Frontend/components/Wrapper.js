"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "@/store/store";
import { Provider } from "react-redux";
////import { ThemeProvider } from "@mui/styles";
//import theme from "@/app/style";

const Wrapper = ({ children }) => {
  return (
    <>
    {/* <ThemeProvider theme={theme}>     */}
        <Provider store={store}>
        {children}
        <ToastContainer />
      </Provider>
     {/* </ThemeProvider> */}

    </>
  );
};

export default Wrapper;