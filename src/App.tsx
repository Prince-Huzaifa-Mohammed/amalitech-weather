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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/country" element={<Country />} />
          <Route path="/reset-password" element={<Reset />} />
          <Route path="/forgot-password" element={<Forgot />} />
          <Route path="/change-password" element={<Change />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
