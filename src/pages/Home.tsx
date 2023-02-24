import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import {
  OutlinedPrimaryButton,
  OutlinedSecondaryButton,
  PrimaryButton,
  SecondaryButton,
} from "../components/styled/Buttons";
import {
  ColoredContainer,
  PositionedBox,
} from "../components/styled/ColoredContainer";
import { GridCenter } from "../components/styled/GridCenter";
import {
  PrimaryHeading,
  SecondaryHeading,
  TertiaryHeading,
  Text,
} from "../components/styled/Headings";
import { SVGIcon } from "../components/styled/SVGIcon";
import { Thumbnail } from "../components/styled/Thumbnail";

const Home = () => {
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
        <PrimaryButton>
          {/* <SVGIcon src="./assets/google.svg" width="2rem" />  */}
          Create an account
        </PrimaryButton>
        <Text>Already have an account?</Text>
        <Link to="/">Log in</Link>

        {/* <SVGIcon src="./assets/google.svg" width="2rem" /> */}
      </PositionedBox>
    </>
  );
};

export default Home;
