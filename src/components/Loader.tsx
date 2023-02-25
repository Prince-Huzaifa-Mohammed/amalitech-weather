import { StyledLoader } from "./styled/StyledLoader";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <StyledLoader>
      <Oval
        height={80}
        width={80}
        color="#DD5928"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#DD5928"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </StyledLoader>
  );
};

export default Loader;
