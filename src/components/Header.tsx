import { FaAngleDown, FaSearch } from "react-icons/fa";
import { PrimaryButton } from "./styled/Buttons";
import { Container } from "./styled/ColoredContainer";
import { Nav } from "./styled/Nav";
import { StyledCelcius } from "./styled/StyledCelcius";
import { StyledHeader } from "./styled/StyledHeader";
import { SVGIcon } from "./styled/SVGIcon";

interface Props {
  toggleDropDown: () => void;
}

const Header: React.FC<Props> = ({ toggleDropDown }) => {
  return (
    <Nav>
      <StyledHeader>
        <div>
          <div>
            {/* <StyledCelcius> */}
            <span>&deg; C</span>
            {/* </StyledCelcius> */}

            <StyledCelcius>
              <span>&deg; F</span>
            </StyledCelcius>
          </div>
        </div>

        <div>
          <form>
            <div>
              <input
                type="text"
                placeholder="Example Germany or Kigali, Rwanda"
              />
              <PrimaryButton>
                <span>
                  <FaSearch color="white" />
                </span>
                <span>Search</span>
              </PrimaryButton>
            </div>
          </form>
        </div>

        <div>
          <div>
            <SVGIcon src="./assets/Germany.svg" width="5rem" />
            <h2>K</h2>
            <span>
              <FaAngleDown onClick={toggleDropDown} />
            </span>
          </div>
        </div>
      </StyledHeader>
    </Nav>
  );
};

export default Header;
