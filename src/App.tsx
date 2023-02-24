import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styled/GlobalStyles";
import Home from "./pages/Home";
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
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
