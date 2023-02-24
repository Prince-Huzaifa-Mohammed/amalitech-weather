import Logo from "../components/Logo";
import {
  ColoredContainer,
  PositionedBox,
} from "../components/styled/ColoredContainer";
import {
  PrimaryHeading,
  SecondaryHeading,
  TertiaryHeading,
  Text,
} from "../components/styled/Headings";

const Home = () => {
  return (
    <>
      <ColoredContainer height="50vh" backgroundColor="#DD5928">
        <Logo />
      </ColoredContainer>

      <ColoredContainer height="50vh" backgroundColor="#0198BA">
        Ghana
      </ColoredContainer>

      <PositionedBox>
        <PrimaryHeading textAlign="center">Home Page</PrimaryHeading>
        <SecondaryHeading>Home Page</SecondaryHeading>
        <TertiaryHeading>Home Page</TertiaryHeading>
        <Text>My name is Ghana</Text>
      </PositionedBox>
    </>
  );
};

export default Home;
