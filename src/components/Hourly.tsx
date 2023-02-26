import { WeatherData } from "../Interfaces/weather";
import { fahrenheit } from "../utils/weather";
import { Projected } from "./Projected";

interface Props {
  isCelcius: boolean;
  weather: WeatherData | null;
}

const Hourly: React.FC<Props> = ({ isCelcius, weather }) => {
  return (
    <Projected>
      <div>
        <h2>Hourly Forecast</h2>
        <div>
          {weather?.hourlyData.map((hour) => (
            <div key={hour.time}>
              <span>{hour.time}</span>
              <img
                src={`http://openweathermap.org/img/wn/${hour.icon}@2x.png`}
                alt=""
              />
              <p>
                {weather && isCelcius ? hour.temp : fahrenheit(hour.temp)}
                &deg;
              </p>
            </div>
          ))}
        </div>
      </div>
    </Projected>
  );
};

export default Hourly;
