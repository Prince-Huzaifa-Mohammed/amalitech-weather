import Logo from "../components/Logo";
import {
  ColoredContainer,
  PositionedBox,
} from "../components/styled/ColoredContainer";
import { Flex } from "../components/styled/Flex";
import {
  PrimaryHeading,
  TertiaryHeading,
  Text,
} from "../components/styled/Headings";
import { InputGroup } from "../components/styled/Input";
import { SVGIcon } from "../components/styled/SVGIcon";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../components/styled/Buttons";
import { GridCenter } from "../components/styled/GridCenter";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  collection,
  addDoc,
  doc,
  serverTimestamp,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { useDispatch } from "react-redux";
import { auth } from "../config/firebase";
import {
  countryIsValid,
  emailIsValid,
  fullNameIsValid,
  passwordIsValid,
} from "../utils/auth";
import { saveUserBio } from "../utils/localStorage";
import { UserRes } from "../Interfaces/weather";
import { addError } from "../Redux/features/errorSlice";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Register = () => {
  const [visible, setVisible] = useState(false);
  const [country, setCountry] = useState("Germany");

  const [registering, setRegistering] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // To dispatch an action to change the state of the app
  const dispatch = useDispatch();

  // For Navigating to different pages
  const navigate = useNavigate();

  // Reference to the users collection in firestore
  const colRef = collection(db, "users");

  // Function to toggle password field visibility
  const toggleVisibility = () => {
    if (visible) setVisible(false);
    else setVisible(true);
  };

  // Function to register a new user using email and password. Also saves user in database
  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // setErrors([]);
      setRegistering(false);

      let validationErrors: string[] = [];

      // Validating input fields
      const fullNameValid = fullNameIsValid(fullname);
      if (!fullNameValid)
        validationErrors.push("Fullname can only contain alphabets");

      const countryValid = countryIsValid(country);
      if (!countryValid)
        validationErrors.push("Country can either be Ghana, Germany or Rwanda");

      const emailValid = emailIsValid(email);
      if (!emailValid) validationErrors.push("Please enter a valid email");

      const passwordValid = passwordIsValid(password);
      if (!passwordValid)
        validationErrors.push(
          "Password should contain at least an uppercase letter, a symbol, a number and password should have a length of 8 and above"
        );

      // Check if Validation Errors array contains errors. If any, show them to user
      if (validationErrors.length > 0) {
        // Send toast error notification
        validationErrors.map((error) => toast.error(error));
      } else {
        // Used to control the loading state
        setRegistering(true);

        // Check if account already exist
        const q = query(colRef, where("email", "==", email));
        const userRefIfAny = await getDocs(q);

        let userBio: UserRes = {};
        userRefIfAny.forEach((ref) => {
          userBio.name = ref.data().name;
          userBio.country = ref.data().country;
          userBio.email = ref.data().email;
        });

        console.log(userBio);

        // If user account already exist, we redirect user to login page
        if (Object.keys(userBio).length !== 0) {
          // Update state here with message
          dispatch(
            addError("An account with this email already exist. Please login")
          );
          // ***************
          navigate("/login");
          setRegistering(false);
        } else {
          // If code gets here, it means no user exist. so a fresh account shoud be created
          const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );

          // We get user from the object return by firbase after registering
          const user = userCredentials.user;
          console.log(user);

          // Updating the displayName property the new user
          updateProfile(auth.currentUser!, { displayName: fullname });

          // Preparing a User Object to be saved to the firestore database. This data contains the country
          const userInfo = {
            name: fullname,
            email: user.email,
            country,
            timestamp: serverTimestamp(),
          };

          // Adding user document to the database which returns a reference to the newly saved user document
          const docRef = await addDoc(colRef, userInfo);

          // Retrieving newly saved user details from the database to be used to update state
          const newUser = await getDoc(doc(db, "users", docRef.id));
          const userData = newUser.data();

          // Saving User Country to Local Storage
          // console.log(userData?.country);
          saveUserBio({
            name: userData?.name,
            country: userData?.country,
            email: userData?.email,
          });
          // console.log(getUserCountry);

          // ***** Fetch Weather data and update state
          // ************************

          // We redirect to dashboard
          navigate("/");

          // Ending the loading state
          setRegistering(false);
        }
      }
    } catch (err) {
      // console.log(err);
      // setErrors(["Check your details once again"]);
      setRegistering(false);
      toast.error("Unable to register user. Please try again later!");
      // navigate("/register");
    }
  };

  return (
    <>
      {registering && <Loader />}
      {!registering && (
        <>
          <ColoredContainer height="50vh" backgroundColor="#DD5928">
            <Logo />
          </ColoredContainer>

          <ColoredContainer
            height="50vh"
            backgroundColor="#0198BA"
          ></ColoredContainer>

          <PositionedBox>
            <PrimaryHeading textAlign="center">
              Create an Account
            </PrimaryHeading>
            <TertiaryHeading textAlign="center" margin="2rem">
              Sign up to get started
            </TertiaryHeading>

            <form onSubmit={registerUser}>
              <Flex>
                <div>
                  <label>Fullname</label>
                  <InputGroup>
                    <input
                      type="text"
                      placeholder="Kwame Kojo Mahamuda"
                      onChange={(e) => setFullname(e.target.value)}
                      value={fullname}
                    />
                  </InputGroup>
                </div>

                <div>
                  <label>Country</label>
                  <InputGroup>
                    <SVGIcon
                      src={`./assets/${country}.svg`}
                      width="3rem"
                    ></SVGIcon>
                    <span></span>
                    <select onChange={(e) => setCountry(e.target.value)}>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Rwanda">Rwanda</option>
                    </select>
                  </InputGroup>
                </div>
              </Flex>

              <label>Email</label>
              <InputGroup>
                <input
                  type="email"
                  placeholder="abukayoyo88@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </InputGroup>

              <label>Password</label>
              <InputGroup>
                <input
                  type={visible ? "text" : "password"}
                  placeholder="************"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <div>
                  <FaEye color="" onClick={toggleVisibility} />
                </div>
              </InputGroup>

              <Text textAlign="center">
                By creating an account, you agree to the{" "}
                <Link to="">Terms of Use</Link> and{" "}
                <Link to="">PrivacyPolicy</Link>.
              </Text>

              <GridCenter>
                <PrimaryButton width="30%">Sign up</PrimaryButton>
              </GridCenter>
            </form>
            <Text textAlign="center">You can also signup with Google</Text>
            <Flex>
              <SVGIcon
                src="./assets/google.svg"
                width="3rem"
                onClick={() => navigate("/country")}
              />
              <Link to="/login">Back to login</Link>
            </Flex>
          </PositionedBox>
        </>
      )}
    </>
  );
};

export default Register;
