import { StyledLogo } from "./styled/StyledLogo";

const Logo = () => {
  return (
    <StyledLogo>
      <img src="./assets/logo.png" alt="Logo" />
      <span>Weathercast</span>
    </StyledLogo>
  );
};

export default Logo;
