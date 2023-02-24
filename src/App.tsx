import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styled/GlobalStyles";
import Country from "./pages/Country";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import theme from "./theme/theme";

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
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
