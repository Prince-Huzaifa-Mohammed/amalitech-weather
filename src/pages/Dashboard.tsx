import { useState } from "react";
import Daily from "../components/Daily";
import DropDown from "../components/DropDown";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Hourly from "../components/Hourly";
import Loader from "../components/Loader";
import Logo from "../components/Logo";
import { Box } from "../components/styled/Box";
import { Container } from "../components/styled/ColoredContainer";
import { StyledHero } from "../components/styled/StyledHero";

const Dashboard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <Box>
      <Logo />

      <Header />

      <aside>
        <DropDown />
      </aside>

      <Container width="1200px">
        <Hero />

        <Hourly />

        <Daily />
      </Container>
      {/* <Loader /> */}
    </Box>
  );
};

export default Dashboard;
