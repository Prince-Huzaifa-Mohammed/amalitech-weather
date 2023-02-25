import Daily from "../components/Daily";
import DropDown from "../components/DropDown";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Hourly from "../components/Hourly";
import Logo from "../components/Logo";
import { Box } from "../components/styled/Box";
import { Container } from "../components/styled/ColoredContainer";
import { StyledHero } from "../components/styled/StyledHero";

const Dashboard = () => {
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
    </Box>
  );
};

export default Dashboard;
