import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Divider from "../components/Divider";
import Logo from "../components/Logo";
import {
  OutlinedPrimaryButton,
  PrimaryButton,
} from "../components/styled/Buttons";
import {
  ColoredContainer,
  PositionedBox,
} from "../components/styled/ColoredContainer";
import { Flex } from "../components/styled/Flex";
import { GridCenter } from "../components/styled/GridCenter";
import {
  PrimaryHeading,
  SecondaryHeading,
} from "../components/styled/Headings";
import { InputGroup } from "../components/styled/Input";
import { SVGIcon } from "../components/styled/SVGIcon";

const Login = () => {
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
        <PrimaryHeading textAlign="center">
          Login to your Account
        </PrimaryHeading>
        <SecondaryHeading textAlign="center">
          Welcome back. Please enter your details
        </SecondaryHeading>

        <form>
          <label>Email</label>
          <InputGroup>
            <input type="email" placeholder="abukayoyo88@gmail.com" />
          </InputGroup>

          <label>Password</label>
          <InputGroup>
            <input type="password" placeholder="************" />
            <FaEye color="" />
          </InputGroup>

          <Flex>
            <PrimaryButton width="40%">Log in</PrimaryButton>
            <OutlinedPrimaryButton
              width="40%"
              onClick={() => navigate("/register")}
            >
              Register
            </OutlinedPrimaryButton>
          </Flex>

          <Divider />
        </form>
        <Flex>
          <OutlinedPrimaryButton>
            <SVGIcon src="./assets/google.svg" width="2rem" />
            Sign in with Google
          </OutlinedPrimaryButton>
          <Link to="/reset-password">Forgot Password?</Link>
        </Flex>
      </PositionedBox>
    </>
  );
};

export default Login;
