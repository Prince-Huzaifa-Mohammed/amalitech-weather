import Logo from "../components/Logo";
import {
  ColoredContainer,
  PositionedBox,
} from "../components/styled/ColoredContainer";

const Home = () => {
  return (
    <>
      <ColoredContainer height="50vh" backgroundColor="#DD5928">
        <Logo />
      </ColoredContainer>

      <ColoredContainer height="50vh" backgroundColor="#0198BA">
        Ghana
      </ColoredContainer>

      <PositionedBox>Senegal</PositionedBox>
    </>
  );
};

export default Home;
