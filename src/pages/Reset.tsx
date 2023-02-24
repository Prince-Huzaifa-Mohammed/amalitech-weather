import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { PrimaryButton } from "../components/styled/Buttons";
import {
  ColoredContainer,
  PositionedBox,
} from "../components/styled/ColoredContainer";
import { GridCenter } from "../components/styled/GridCenter";
import {
  PrimaryHeading,
  TertiaryHeading,
  Text,
} from "../components/styled/Headings";
import { Thumbnail } from "../components/styled/Thumbnail";

const Reset = () => {
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
        <PrimaryHeading textAlign="center">Reset your Password</PrimaryHeading>
        <TertiaryHeading textAlign="center">
          Don't worry, we will help you
        </TertiaryHeading>

        <GridCenter>
          <Thumbnail src="./assets/Password.svg" width="40%" />
        </GridCenter>

        <Text textAlign="center">
          It happens. We all forget our passwords sometimes. The most important
          thing is to be able to recover your password in a secured manner.
          Worry not. Please click the button bellow and you will be able to
          create a new password for your account.
        </Text>

        <GridCenter>
          <PrimaryButton width="50%">Reset your Password</PrimaryButton>
        </GridCenter>

        <GridCenter>
          <Link to="/">Back to Login</Link>
        </GridCenter>
      </PositionedBox>
    </>
  );
};

export default Reset;
