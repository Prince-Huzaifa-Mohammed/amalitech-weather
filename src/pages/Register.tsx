import Logo from "../components/Logo";
import {
  ColoredContainer,
  PositionedBox,
} from "../components/styled/ColoredContainer";
import { Flex } from "../components/styled/Flex";
import {
  PrimaryHeading,
  TertiaryHeading,
  Text,
} from "../components/styled/Headings";
import { InputGroup } from "../components/styled/Input";
import { SVGIcon } from "../components/styled/SVGIcon";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/styled/Buttons";
import { GridCenter } from "../components/styled/GridCenter";

const Register = () => {
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
        <PrimaryHeading textAlign="center">Create an Account</PrimaryHeading>
        <TertiaryHeading textAlign="center" margin="2rem">
          Sign up to get started
        </TertiaryHeading>

        <form>
          <Flex>
            <div>
              <label>Fullname</label>
              <InputGroup>
                <input type="text" placeholder="Kwame Kojo Mahamuda" />
              </InputGroup>
            </div>

            <div>
              <label>Country</label>
              <InputGroup>
                <SVGIcon src="./assets/Ghana.svg" width="3rem"></SVGIcon>
                <span></span>
                <select>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Rwanda">Rwanda</option>
                </select>
              </InputGroup>
            </div>
          </Flex>

          <label>Email</label>
          <InputGroup>
            <input type="text" placeholder="abukayoyo88@gmail.com" />
          </InputGroup>

          <label>Password</label>
          <InputGroup>
            <input type="password" placeholder="************" />
            <FaEye color="" />
          </InputGroup>

          <Text textAlign="center">
            By creating an account, you agree to the{" "}
            <Link to="">Terms of Use</Link> and <Link to="">PrivacyPolicy</Link>
            .
          </Text>

          <GridCenter>
            <PrimaryButton>Sign up</PrimaryButton>
          </GridCenter>
        </form>
        <Text textAlign="center">You can also signup with Google</Text>
        <Flex>
          <SVGIcon src="./assets/google.svg" width="3rem" />
          <Link to="/">Back to login</Link>
        </Flex>
      </PositionedBox>
    </>
  );
};

export default Register;
