import { StyledHero } from "./styled/StyledHero";
import { CgCompress } from "react-icons/cg";
import { FaEye, FaWind } from "react-icons/fa";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdWaterDrop } from "react-icons/md";
import { WeatherData } from "../Interfaces/weather";
import { fahrenheit } from "../utils/weather";

interface Props {
  isCelcius: boolean;
  weather: WeatherData | null;
}

const Hero: React.FC<Props> = ({ isCelcius, weather }) => {
  let image = "";
  if (weather?.currentCondition === "Clouds") image = "cloudy.jpg";
  else if (weather?.currentCondition === "Clear") image = "clear.jpg";
  else if (weather?.currentCondition === "Rain") image = "raining.jpg";
  else if (weather?.currentCondition === "Sunny") image = "sunny.jpg";
  else if (weather?.currentCondition === "Haze") image = "haze.jpg";
  else if (weather?.currentCondition === "Mist") image = "mist.jpg";
  else image = "clear.jpg";

  return (
    <StyledHero image={image}>
      <div>
        <h2>{weather?.currentTime}</h2>
        <div>
          <h1>
            <span>{weather?.name}, </span> <span>{weather?.country}</span>
          </h1>
          <article>
            <h5>
              {weather && isCelcius
                ? weather.currentTemperature
                : fahrenheit(weather!.currentTemperature)}
              &deg;
            </h5>
            {/* <h5>{weather?.currentTemperature} &deg;</h5> */}
            <h5>{weather?.currentCondition}</h5>
          </article>

          <section>
            <div>
              <div>
                <div>
                  <MdWaterDrop />
                  <p>UV Index</p>
                </div>
                <p>{weather?.uvi}</p>
              </div>

              <div>
                <div>
                  <CgCompress />
                  <p>Pressure</p>
                </div>
                <p>{weather?.currentPressure} mb</p>
              </div>

              <div>
                <div>
                  <FaWind />
                  <p>Wind</p>
                </div>
                <p>{weather?.windSpeed} km/h</p>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <FaEye />
                  <p>Visibility</p>
                </div>
                <p>{weather?.visibility} m</p>
              </div>

              <div>
                <div>
                  <GiSunrise />
                  <p>Sunrise</p>
                </div>
                <p>{weather?.sunrise}</p>
              </div>

              <div>
                <div>
                  <GiSunset />
                  <p>Sunset</p>
                </div>
                <p>{weather?.sunset}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
