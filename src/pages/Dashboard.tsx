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
import { ShowDropDown } from "../components/styled/ShowDropDown";
import { StyledHero } from "../components/styled/StyledHero";

const Dashboard = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  // Function to open and close dropdown
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <Box>
      <Logo />

      <Header toggleDropDown={toggleDropDown} />

      {showDropDown && (
        <ShowDropDown>
          <aside>
            <DropDown />
          </aside>
        </ShowDropDown>
      )}

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
