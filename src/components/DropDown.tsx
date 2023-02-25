import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { StyledDropDown } from "./styled/StyledDropDown";

const DropDown = () => {
  return (
    <StyledDropDown>
      <Link to="/">
        <div>
          <FaLock />
          Logout
        </div>
      </Link>
    </StyledDropDown>
  );
};

export default DropDown;
