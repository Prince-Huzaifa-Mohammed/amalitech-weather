import { FaEye } from "react-icons/fa";
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

const Change = () => {
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
          <label>New Password</label>
          <InputGroup>
            <input type="password" placeholder="************" />
            <FaEye color="" />
          </InputGroup>

          <label>Confirm Password</label>
          <InputGroup>
            <input type="password" placeholder="************" />
            <FaEye color="" />
          </InputGroup>

          <GridCenter>
            <PrimaryButton width="50%">Reset Password</PrimaryButton>
          </GridCenter>
        </form>

        <GridCenter>
          <Link to="/">Back to Login</Link>
        </GridCenter>
      </PositionedBox>
    </>
  );
};

export default Change;
