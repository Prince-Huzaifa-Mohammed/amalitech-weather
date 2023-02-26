import { FaLock } from "react-icons/fa";
import { StyledDropDown } from "./styled/StyledDropDown";

interface Props {
  logoutUser: () => void;
}

const DropDown: React.FC<Props> = ({ logoutUser }) => {
  return (
    <StyledDropDown>
      <div onClick={logoutUser}>
        <FaLock />
        Logout
      </div>
    </StyledDropDown>
  );
};

export default DropDown;
