import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate, RouteProps } from "react-router-dom";
import Logo from "../components/Logo";
import { PrimaryButton } from "../components/styled/Buttons";
import {
  ColoredContainer,
  PositionedBox,
} from "../components/styled/ColoredContainer";
import { GridCenter } from "../components/styled/GridCenter";
import { PrimaryHeading, TertiaryHeading } from "../components/styled/Headings";
import { InputGroup } from "../components/styled/Input";
import queryString from "query-string";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";
import { auth } from "../config/firebase";
import { confirmPasswords, passwordIsValid } from "../utils/auth";
import { toast } from "react-toastify";
import { addError } from "../Redux/features/errorSlice";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";

const Change = () => {
  const [visibleNew, setVisibleNew] = useState(false);
  const [visibleConfirm, setVisibleConfirm] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [verified, setVerified] = useState(false);
  const [changing, setChanging] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [oobCode, setOobCode] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let params = queryString.parse(window.location.search);

    if (params) {
      let oobCode = params.oobCode as string;

      if (oobCode) {
        // Verify code
        verifyPasswordResetLink(oobCode);
      } else {
        setVerified(false);
        setVerifying(false);
      }
    } else {
      setVerified(false);
      setVerifying(false);
    }
  }, []);

  const verifyPasswordResetLink = (code: string) => {
    verifyPasswordResetCode(auth, code)
      .then((result) => {
        // console.log(result);
        setOobCode(code);
        setVerified(true);
        setVerifying(false);
      })
      .catch((err) => {
        // console.log(err);
        setVerified(false);
        setVerifying(false);
      });
  };

  const passwordResetRequest = () => {
    let validationErrors: string[] = [];

    const passwordsAreMatch = confirmPasswords(password, confirm);
    const isValidPassword = passwordIsValid(password);

    if (!passwordsAreMatch) validationErrors.push("Your passwords donot match");
    if (!isValidPassword)
      validationErrors.push(
        "Password should contain at least an uppercase letter, a symbol, a number and password should have a length of 8 and above"
      );

    if (validationErrors.length > 0) {
      validationErrors.map((error) => toast.error(error));
    } else {
      setChanging(true);

      confirmPasswordReset(auth, oobCode, password)
        .then(() => {
          // UPDATE STATE HERE
          dispatch(
            addError("Password has been changed successfuly, please login.")
          );
          // ****************************

          setChanging(false);
          navigate("/login");
        })
        .catch((err) => {
          setChanging(false);
          navigate("/");
        });
    }
  };

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
      {verifying ? (
        <Loader />
      ) : (
        <>
          <ColoredContainer height="50vh" backgroundColor="#DD5928">
            <Logo />
          </ColoredContainer>

          <ColoredContainer
            height="50vh"
            backgroundColor="#0198BA"
          ></ColoredContainer>

          <PositionedBox>
            {verified ? (
              <>
                {changing ? (
                  <PrimaryHeading textAlign="center" margin="3rem">
                    Please wait ...
                  </PrimaryHeading>
                ) : (
                  <>
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
                          onChange={(e) => setPassword(e.target.value)}
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
                          onChange={(e) => setConfirm(e.target.value)}
                        />
                        <div>
                          <FaEye color="" onClick={toggleVisibilityConfirm} />
                        </div>
                      </InputGroup>

                      <GridCenter>
                        <PrimaryButton
                          width="50%"
                          onClick={passwordResetRequest}
                        >
                          Reset Password
                        </PrimaryButton>
                      </GridCenter>
                    </form>

                    <GridCenter>
                      <Link to="/login">Back to Login</Link>
                    </GridCenter>
                  </>
                )}
              </>
            ) : (
              <>
                <PrimaryHeading margin="2rem" textAlign="center">
                  Invalid Link!
                </PrimaryHeading>
                <GridCenter>
                  <Link to="/login">Back to login page</Link>
                </GridCenter>
              </>
            )}
          </PositionedBox>
        </>
      )}
    </>
  );
};

export default Change;
