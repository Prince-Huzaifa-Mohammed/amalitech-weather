import DropDown from "../components/DropDown";
import Header from "../components/Header";
import Logo from "../components/Logo";
import { Box } from "../components/styled/Box";

const Dashboard = () => {
  return (
    <Box>
      <Logo />

      <Header />

      <aside>
        <DropDown />
      </aside>
    </Box>
  );
};

export default Dashboard;
