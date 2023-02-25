import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { PrimaryButton } from "../components/styled/Buttons";
import {
  ColoredContainer,
  PositionedBox,
} from "../components/styled/ColoredContainer";
import { Flex } from "../components/styled/Flex";
import { GridCenter } from "../components/styled/GridCenter";
import { PrimaryHeading, Text } from "../components/styled/Headings";
import { Thumbnail } from "../components/styled/Thumbnail";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <ColoredContainer height="50vh" backgroundColor="#DD5928">
        <Logo />
      </ColoredContainer>

      <ColoredContainer
        height="50vh"
        backgroundColor="#0198BA"
      ></ColoredContainer>

      <PositionedBox>
        <GridCenter>
          <Thumbnail src="./assets/Weather-notification.svg" width="50%" />
        </GridCenter>
        <PrimaryHeading textAlign="center">
          Welcome to Amalitech Weathercast
        </PrimaryHeading>
        <Flex>
          <PrimaryButton onClick={() => navigate("/register")}>
            {/* <SVGIcon src="./assets/google.svg" width="2rem" />  */}
            Create an account
          </PrimaryButton>
          <Text>Already have an account?</Text>
          <Link to="/login">Log in</Link>
        </Flex>
      </PositionedBox>
    </>
  );
};

export default Home;
