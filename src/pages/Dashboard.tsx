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
  const [isCelcius, setIsCelcius] = useState(true);

  // Function to open and close dropdown
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  // Function to switch from celcius to fahrenheit and vise versa
  const toggleCelcuis = () => {
    setIsCelcius(!isCelcius);
  };

  return (
    <Box>
      <Logo />

      <Header
        toggleDropDown={toggleDropDown}
        isCelcius={isCelcius}
        toggleCelcius={toggleCelcuis}
      />

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
