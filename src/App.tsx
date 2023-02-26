import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styled/GlobalStyles";
import Change from "./pages/Change";
import Country from "./pages/Country";
import Dashboard from "./pages/Dashboard";
import Forgot from "./pages/Forgot";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import theme from "./theme/theme";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./Auth/Auth";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Auth>
                <Home />
              </Auth>
            }
          />
          <Route
            path="/register"
            element={
              <Auth>
                <Register />
              </Auth>
            }
          />
          <Route
            path="/login"
            element={
              <Auth>
                <Login />
              </Auth>
            }
          />
          <Route
            path="/country"
            element={
              <Auth>
                <Country />
              </Auth>
            }
          />
          <Route
            path="/reset-password"
            element={
              <Auth>
                <Reset />
              </Auth>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Auth>
                <Forgot />
              </Auth>
            }
          />
          <Route
            path="/change-password"
            element={
              <Auth>
                <Change />
              </Auth>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
