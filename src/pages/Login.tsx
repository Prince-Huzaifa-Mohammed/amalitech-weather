import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Divider from "../components/Divider";
import Logo from "../components/Logo";
import {
  OutlinedPrimaryButton,
  PrimaryButton,
} from "../components/styled/Buttons";
import {
  ColoredContainer,
  PositionedBox,
} from "../components/styled/ColoredContainer";
import { Flex } from "../components/styled/Flex";
// import { GridCenter } from "../components/styled/GridCenter";
import {
  PrimaryHeading,
  SecondaryHeading,
} from "../components/styled/Headings";
import { InputGroup } from "../components/styled/Input";
import { SVGIcon } from "../components/styled/SVGIcon";
import { emailIsValid, passwordIsValid } from "../utils/auth";
import { toast } from "react-toastify";
import { auth, db } from "../config/firebase";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { saveUserBio } from "../utils/localStorage";
import { useSelector, useDispatch } from "react-redux";
import { UserRes } from "../Interfaces/weather";
import Loader from "../components/Loader";
import { RootState } from "../Redux/store";
import { removeError } from "../Redux/features/errorSlice";
import { InfoAlert } from "../components/styled/Alert";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [signingIn, SetSigningIn] = useState(false);
  const [error, setError] = useState(
    useSelector((state: RootState) => state.error.value)
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const colRef = collection(db, "users");

  // Function to toggle password visibility
  const toggleVisibility = () => {
    if (visible) setVisible(false);
    else setVisible(true);
  };

  // SIGN IN WITH EMAIL AND PASSWORD ************************************
  const signinWithEmailAndPassord = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Clear existing error from state
    dispatch(removeError());

    // Validate user input
    const validationErrors = [];

    const emailValid = emailIsValid(email);
    if (!emailValid) validationErrors.push("Please enter a valid email!");

    const passwordValid = passwordIsValid(password);
    if (!passwordValid) validationErrors.push("Invalid password");

    if (validationErrors.length > 0) {
      validationErrors.map((error) => toast.error(error));
    } else {
      SetSigningIn(true);
      // setError("");

      try {
        const credentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = credentials.user;
        // console.log(user);

        // Constructing the query to get user info from the database

        const q = query(colRef, where("email", "==", email));

        // Making the request to the database
        const userRefIfAny = await getDocs(q);

        let userBio: UserRes = {};
        // let userCountry: User | null = null
        userRefIfAny.forEach((ref) => {
          userBio.name = ref.data().name;
          userBio.country = ref.data().country;
          userBio.email = ref.data().email;
        });

        // console.log(userBio);

        if (Object.keys(userBio).length !== 0) {
          // Update state here with message to be used in toast
          // ******

          // Save user country to localstorage
          saveUserBio(userBio);

          // console.log(userBio);

          navigate("/");
          SetSigningIn(false);
        } else {
          toast.error("Please create an account!");
          SetSigningIn(false);
        }
      } catch (err) {
        toast.error("Invalid credentials");
        SetSigningIn(false);
      }
    }
  };

  // SIGN IN WITH GMAIL ************************************

  const signInWithGoogle = async () => {
    // Clear existing error from state
    dispatch(removeError());

    SetSigningIn(false);
    // setError("");

    try {
      const credentials = await signInWithPopup(auth, new GoogleAuthProvider());

      const user = credentials.user;

      // Constructing the query to search the database if email exist
      const q = query(colRef, where("email", "==", user.email));

      // Making the request to the database
      const userRefIfAny = await getDocs(q);

      let userBio: UserRes = {};
      // let userCountry: User | null = null
      userRefIfAny.forEach((ref) => {
        userBio.name = ref.data().name;
        userBio.country = ref.data().country;
        userBio.email = ref.data().email;
      });

      // console.log(userBio);

      // Checking if userBio contains some data
      if (Object.keys(userBio).length !== 0) {
        // Save users data to localstorage
        saveUserBio(userBio);

        // Update state here ************************

        // ******************************************

        //console.log(user);

        SetSigningIn(true);
        navigate("/");
      } else {
        await signOut(auth);

        // Update state here ********************

        // **************************************
        SetSigningIn(false);
        navigate("/");
      }
    } catch (err) {
      SetSigningIn(false);
      toast.error("Please try again later!");
    }
  };

  return (
    <>
      {signingIn && <Loader />}

      <ColoredContainer height="50vh" backgroundColor="#DD5928">
        <Logo />
      </ColoredContainer>

      <ColoredContainer
        height="50vh"
        backgroundColor="#0198BA"
      ></ColoredContainer>

      <PositionedBox>
        {error && <InfoAlert>{error}</InfoAlert>}

        <PrimaryHeading textAlign="center">
          Login to your Account
        </PrimaryHeading>
        <SecondaryHeading textAlign="center">
          Welcome back. Please enter your details
        </SecondaryHeading>

        <form onSubmit={signinWithEmailAndPassord}>
          <label>Email</label>
          <InputGroup>
            <input
              type="email"
              placeholder="abukayoyo88@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>

          <label>Password</label>
          <InputGroup>
            <input
              type={visible ? "text" : "password"}
              placeholder="************"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <FaEye color="" onClick={toggleVisibility} />
            </div>
          </InputGroup>

          <Flex>
            <PrimaryButton>Log in</PrimaryButton>
            <span>
              <Link to="/register">Register</Link>
            </span>
            {/* <OutlinedPrimaryButton
              width="40%"
              onClick={() => navigate("/register")}
            >
              Register
            </OutlinedPrimaryButton> */}
          </Flex>

          <Divider />
        </form>
        <Flex>
          <OutlinedPrimaryButton onClick={signInWithGoogle}>
            <SVGIcon src="./assets/google.svg" width="2rem" />
            Sign in with Google
          </OutlinedPrimaryButton>
          <Link to="/reset-password">Forgot Password?</Link>
        </Flex>
      </PositionedBox>
    </>
  );
};

export default Login;
