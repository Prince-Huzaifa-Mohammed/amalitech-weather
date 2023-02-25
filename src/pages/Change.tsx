import { useState } from "react";
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
  const [visibleNew, setVisibleNew] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);

  const toggleVisibility = () => {
    if (visibleNew) setVisibleNew(false);
    else setVisibleNew(true);
  };

  const toggleVisibilityConfirm = () => {
    if (visibleConfirm) setVisibleConfirm(false);
    else setVisibleConfirm(true);
  };

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
            <input
              type={visibleNew ? "text" : "password"}
              placeholder="************"
            />
            <div>
              <FaEye color="" onClick={toggleVisibility} />
            </div>
          </InputGroup>

          <label>Confirm Password</label>
          <InputGroup>
            <input
              type={visibleConfirm ? "text" : "password"}
              placeholder="************"
            />
            <div>
              <FaEye color="" onClick={toggleVisibilityConfirm} />
            </div>
          </InputGroup>

          <GridCenter>
            <PrimaryButton width="50%">Reset Password</PrimaryButton>
          </GridCenter>
        </form>

        <GridCenter>
          <Link to="/login">Back to Login</Link>
        </GridCenter>
      </PositionedBox>
    </>
  );
};

export default Change;
