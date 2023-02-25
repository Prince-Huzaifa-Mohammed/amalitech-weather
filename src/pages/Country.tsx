import Logo from "../components/Logo";
import { PrimaryButton } from "../components/styled/Buttons";
import {
  ColoredContainer,
  PositionedBox,
} from "../components/styled/ColoredContainer";
import { PrimaryHeading, TertiaryHeading } from "../components/styled/Headings";
import { InputGroup } from "../components/styled/Input";
import { SVGIcon } from "../components/styled/SVGIcon";
import { useState } from "react";
import { auth, db } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { GridCenter } from "../components/styled/GridCenter";
import { emailIsValid } from "../utils/auth";
import { toast } from "react-toastify";
import { saveUserBio } from "../utils/localStorage";
import { UserRes } from "../Interfaces/weather";
import { addError } from "../Redux/features/errorSlice";
import { useDispatch } from "react-redux";
import Loader from "../components/Loader";

const Country = () => {
  const [country, setCountry] = useState("Germany");
  const [email, setEmail] = useState("");
  const [authing, setAuthing] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Collection Reference
  const colRef = collection(db, "users");

  // Function to register user with a google account
  const registerWithGoogle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // For controlling the loading state
    setAuthing(false);

    try {
      // Validate email field
      const emailValid = emailIsValid(email);

      if (!emailValid) {
        // If email format is incorrect, show a tast error
        toast.error("Please enter a valid email!");
      } else {
        // If email is format is valid check if such an email has already been registered

        // Loading
        setAuthing(true);

        // Constructing the query to search the database if email exist
        const q = query(colRef, where("email", "==", email));

        // Making the request to the database
        const userRefIfAny = await getDocs(q);

        let userBio: UserRes = {};
        userRefIfAny.forEach((ref) => {
          userBio.name = ref.data().name;
          userBio.country = ref.data().country;
          userBio.email = ref.data().email;
        });

        // console.log(userBio);

        // If response contains a user object, we redirect the user to the login page cos an account exist
        if (Object.keys(userBio).length !== 0) {
          setAuthing(false);
          // Update state here with message to be used in toast
          dispatch(
            addError("An account with this email already exist. Please login")
          );
          // toast.error("An account with this email already exist. Please login");
          // ******
          navigate("/login");
        } else {
          // If code execution gets here, means user doesn't exist so a new User should be created
          const userCredentials = await signInWithPopup(
            auth,
            new GoogleAuthProvider()
          );

          // Preparing a User Object to be saved to the firestore database.
          const userInfo = {
            name: userCredentials.user.displayName,
            email: userCredentials.user.email,
            country,
            timestamp: serverTimestamp(),
          };

          // Adding user document to the database which returns a reference to the newly saved user document
          const docRef = await addDoc(colRef, userInfo);

          // Retrieving newly saved user details from the database to be used to update state
          const newUser = await getDoc(doc(db, "users", docRef.id));
          const userData = newUser.data();

          // Save users country to localstorage
          saveUserBio({
            name: userData?.name,
            country: userData?.country,
            email: userData?.email,
          });

          // ***** Fetch Weather data and update state
          // ************************

          // Ending the loading state
          setAuthing(false);

          // We redirect to dashboard
          navigate("/");
        }
      }
    } catch (err) {
      // console.log(err);
      // setError("Please sign up with a valid google account");
      toast.error("Provide a valid google account!");
    }
  };

  return (
    <>
      {authing && <Loader />}

      <ColoredContainer height="50vh" backgroundColor="#DD5928">
        <Logo />
      </ColoredContainer>

      <ColoredContainer
        height="50vh"
        backgroundColor="#0198BA"
      ></ColoredContainer>

      <PositionedBox>
        <PrimaryHeading textAlign="center">
          Please Select a Country
        </PrimaryHeading>
        <TertiaryHeading textAlign="center" margin="3rem">
          Before you proceed to signup to this service, we would like you to
          kindly select a country for which you would like to receive weather
          updates
        </TertiaryHeading>

        <form onSubmit={registerWithGoogle}>
          <label>Country</label>
          <InputGroup margin="3rem">
            <SVGIcon src={`./assets/${country}.svg`} width="3rem"></SVGIcon>
            <span></span>
            <select onChange={(e) => setCountry(e.target.value)}>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Rwanda">Rwanda</option>
            </select>
          </InputGroup>

          <label>Email (Please enter a valid Google account)</label>
          <InputGroup margin="3rem">
            <input
              type="email"
              placeholder="abukayoyo88@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </InputGroup>

          <PrimaryButton width="100%" margin="2rem">
            Proceed
          </PrimaryButton>
        </form>

        <GridCenter>
          <Link to="/login">Back to Login</Link>
        </GridCenter>
      </PositionedBox>
    </>
  );
};

export default Country;
