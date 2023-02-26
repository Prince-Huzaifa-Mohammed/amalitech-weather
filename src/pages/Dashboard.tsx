import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import Daily from "../components/Daily";
import DropDown from "../components/DropDown";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Hourly from "../components/Hourly";
import Loader from "../components/Loader";
import Logo from "../components/Logo";
import { Box } from "../components/styled/Box";
import { Container } from "../components/styled/ColoredContainer";
import { ShowDropDown } from "../components/styled/ShowDropDown";
import {
  getFormattedData,
  getGeoLocation,
  getWeatherData,
  isValidCountry,
} from "../utils/weather";
import { deleteUserBio, getUserBio } from "../utils/localStorage";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/store";
import { addWeatherData } from "../Redux/features/weatherSlice";
import { addUser } from "../Redux/features/userSlice";

const Dashboard = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isCelcius, setIsCelcius] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);
  const [loading, setLoading] = useState(true);
  const [inputData, setInputData] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  // Data required from redux to power user dashboard
  const weather = useSelector((state: RootState) => state.weather.value);
  const user = useSelector((state: RootState) => state.user.value);

  // console.log(inputData);

  const navigate = useNavigate();

  // Function to open and close dropdown
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  // Function to switch from celcius to fahrenheit and vise versa
  const toggleCelcuis = () => {
    setIsCelcius(!isCelcius);
  };

  // Dashboad search functionality
  const getGeoWeather = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimedInputData = inputData.trim();
    setInputData("");
    setError("");
    setLoading(true);

    if (trimedInputData === "") {
      setLoading(false);
      return setError(
        "Please provide a valid location. Search field cannot be empty!"
      );
    } else {
      try {
        // Try to get longitude and latitude by location name
        const data = await getGeoLocation(trimedInputData);

        if (data.count === 0) {
          // Means coordinates not found
          setLoading(false);
          return setError(
            "Please provide a valid Country name or a valid city and country name separated by a comma(,)"
          );
        } else {
          // If code execution gets here, it means coordinates for search location has been found

          // Check if searched location is within the acceptable search countries(Ghana, Germany, Rwanda)
          const validCountrySearch = isValidCountry(data.list[0]);

          if (!validCountrySearch) {
            setLoading(false);
            return setError(
              "You are only allowed to search for places in Germany, Ghana or Rwanda"
            );
          }

          // If code execution gets here, it means coordinates have been found and searched location in acceptable

          const longitude = data.list[0].coord.lon;
          const latitude = data.list[0].coord.lat;

          // Get weather data from coordinates (long and lat)
          const weatherData = await getWeatherData(longitude, latitude);

          // Transform huge data set to only data that is needed to power the page
          const formattedData = getFormattedData(data.list[0], weatherData);
          console.log(formattedData);

          // Save data to state to trigger rerender
          dispatch(addWeatherData(formattedData));
          setLoading(false);
        }
      } catch (err) {
        // console.log(err);
        setError("Something went wrong. Please try again later!");
        setLoading(false);
      }
    }
  };

  // ****************************************************************************************//

  // Carry out an Auth check as well as provide user's country data on page load
  useEffect(() => {
    setError("");
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Get user country from localstorage
        const userBio = getUserBio();
        // console.log(userBio);

        // Fetch weather data to power users dashboards
        const apiCall = async (location: string) => {
          try {
            const data = await getGeoLocation(location);
            const longitude = data.list[0].coord.lon;
            const latitude = data.list[0].coord.lat;
            const weatherData = await getWeatherData(longitude, latitude);

            const formattedData = getFormattedData(data.list[0], weatherData);
            // console.log(formattedData);

            // Update state with weather data
            dispatch(addWeatherData(formattedData));
            dispatch(addUser(userBio));

            setLoading(false);
          } catch (err) {
            // console.log(err);
            setError("Something went wrong. Please try again later!");
            setLoading(false);
          }
        };

        apiCall(userBio.country);
      } else {
        navigate("/");
        setLoading(false);
      }
    });

    return unsubscribe;
  }, [auth]);

  // ***************************************************************************************//

  // Function to logout user
  const logoutUser = async () => {
    setLoggingOut(true);

    await signOut(auth);

    // Delete country from localstorage
    deleteUserBio();

    setLoggingOut(false);
  };

  return (
    <Box>
      {loading && <Loader />}

      {/* {loggingOut && <Loader />} */}

      {!loading && (
        <>
          <Logo />

          <Header
            toggleDropDown={toggleDropDown}
            isCelcius={isCelcius}
            toggleCelcius={toggleCelcuis}
            getGeoWeather={getGeoWeather}
            inputData={inputData}
            setInputData={setInputData}
            user={user}
          />

          {showDropDown && (
            <ShowDropDown>
              <aside>
                <DropDown logoutUser={logoutUser} />
              </aside>
            </ShowDropDown>
          )}
        </>
      )}

      {weather && !error && !loggingOut && !loading && (
        <Container width="1200px">
          <Hero weather={weather} isCelcius={isCelcius} />

          <Hourly weather={weather} isCelcius={isCelcius} />

          <Daily weather={weather} isCelcius={isCelcius} />
        </Container>
      )}

      {error && <h6>{error}</h6>}

      {/* <Loader /> */}
    </Box>
  );
};

export default Dashboard;
