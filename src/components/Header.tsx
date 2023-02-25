import { FaAngleDown, FaSearch } from "react-icons/fa";
import { PrimaryButton } from "./styled/Buttons";
import { Nav } from "./styled/Nav";
import { StyledCelcius } from "./styled/StyledCelcius";
import { StyledHeader } from "./styled/StyledHeader";
import { SVGIcon } from "./styled/SVGIcon";

interface Props {
  toggleDropDown: () => void;
  isCelcius: boolean;
  toggleCelcius: () => void;
}

const Header: React.FC<Props> = ({
  toggleDropDown,
  isCelcius,
  toggleCelcius,
}) => {
  return (
    <Nav>
      <StyledHeader>
        <div>
          <div>
            {isCelcius ? (
              <>
                <StyledCelcius>
                  <span>&deg; C</span>
                </StyledCelcius>

                <span onClick={toggleCelcius}>&deg; F</span>
              </>
            ) : (
              <>
                <span onClick={toggleCelcius}>&deg; C</span>
                <StyledCelcius>
                  <span>&deg; F</span>
                </StyledCelcius>
              </>
            )}
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
