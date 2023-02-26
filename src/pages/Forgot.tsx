import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import { PrimaryButton } from "../components/styled/Buttons";
import {
  ColoredContainer,
  PositionedBox,
} from "../components/styled/ColoredContainer";
import { GridCenter } from "../components/styled/GridCenter";
import {
  PrimaryHeading,
  SecondaryHeading,
  TertiaryHeading,
} from "../components/styled/Headings";
import { InputGroup } from "../components/styled/Input";
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { emailIsValid } from "../utils/auth";
import { toast } from "react-toastify";
import { auth } from "../config/firebase";
import Loader from "../components/Loader";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const resetPasswordRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailValid = emailIsValid(email);

    if (!emailValid) toast.error("Please enter a valid email!");
    else {
      setSending(true);

      sendPasswordResetEmail(auth, email)
        .then(() => {
          setSent(true);
          setSending(false);
        })
        .catch((err) => {
          setSending(false);
          toast.error("This email doesn't exist in our records.");
        });
    }
  };

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
        {sent && (
          <SecondaryHeading textAlign="center">
            A link with instructions to reset your password has been sent to
            your email
          </SecondaryHeading>
        )}

        {!sending && !sent && (
          <>
            <PrimaryHeading textAlign="center">
              Forgotten your Password?
            </PrimaryHeading>
            <TertiaryHeading textAlign="center" margin="3rem">
              Don't worry, we will help you
            </TertiaryHeading>

            <form onSubmit={resetPasswordRequest}>
              <label>Email</label>
              <InputGroup>
                <input
                  type="email"
                  placeholder="abukayoyo88@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>

              <GridCenter>
                <PrimaryButton
                  margin="2rem"
                  width="50%"
                  onClick={() => resetPasswordRequest}
                >
                  Send
                </PrimaryButton>
              </GridCenter>
            </form>

            <GridCenter>
              <Link to="/">Back to Login</Link>
            </GridCenter>
          </>
        )}
      </PositionedBox>

      {sending && <Loader />}
    </>
  );
};

export default Forgot;
