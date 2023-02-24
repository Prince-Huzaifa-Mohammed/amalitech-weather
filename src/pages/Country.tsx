import Logo from "../components/Logo";
import { PrimaryButton } from "../components/styled/Buttons";
import {
  ColoredContainer,
  PositionedBox,
} from "../components/styled/ColoredContainer";
import { PrimaryHeading, TertiaryHeading } from "../components/styled/Headings";
import { InputGroup } from "../components/styled/Input";
import { SVGIcon } from "../components/styled/SVGIcon";

const Country = () => {
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
          Please Select a Country
        </PrimaryHeading>
        <TertiaryHeading textAlign="center" margin="3rem">
          Before you proceed to signup to this service, we would like you to
          kindly select a country for which you would like to receive weather
          updates
        </TertiaryHeading>
        <form>
          <label>Country</label>
          <InputGroup margin="3rem">
            <SVGIcon src="./assets/Ghana.svg" width="3rem"></SVGIcon>
            <span></span>
            <select>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Rwanda">Rwanda</option>
            </select>
          </InputGroup>

          <label>Email (Please enter a valid Google account)</label>
          <InputGroup margin="3rem">
            <input type="email" placeholder="abukayoyo88@gmail.com" />
          </InputGroup>

          <PrimaryButton width="100%" margin="2rem">
            Proceed
          </PrimaryButton>
        </form>
      </PositionedBox>
    </>
  );
};

export default Country;
