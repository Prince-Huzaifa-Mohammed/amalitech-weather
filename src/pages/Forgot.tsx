import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { PrimaryButton } from "../components/styled/Buttons";
import {
  ColoredContainer,
  PositionedBox,
} from "../components/styled/ColoredContainer";
import { GridCenter } from "../components/styled/GridCenter";
import { PrimaryHeading, TertiaryHeading } from "../components/styled/Headings";
import { InputGroup } from "../components/styled/Input";

const Forgot = () => {
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
        <PrimaryHeading textAlign="center">
          Forgotten your Password?
        </PrimaryHeading>
        <TertiaryHeading textAlign="center" margin="3rem">
          Don't worry, we will help you
        </TertiaryHeading>

        <form>
          <label>Email</label>
          <InputGroup>
            <input type="email" placeholder="abukayoyo88@gmail.com" />
          </InputGroup>

          <GridCenter>
            <PrimaryButton width="50%">Send</PrimaryButton>
          </GridCenter>
        </form>

        <GridCenter>
          <Link to="/">Back to Login</Link>
        </GridCenter>
      </PositionedBox>
    </>
  );
};

export default Forgot;
