import { WeatherData } from "../Interfaces/weather";
import { fahrenheit } from "../utils/weather";
import { Projected } from "./Projected";

interface Props {
  isCelcius: boolean;
  weather: WeatherData | null;
}

const Daily: React.FC<Props> = ({ isCelcius, weather }) => {
  return (
    <Projected>
      <div>
        <h2>Daily Forecast</h2>
        <div>
          {weather?.dailyData.map((day) => (
            <div key={day.day}>
              <span>{day.day}</span>
              <img
                src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt=""
              />
              <p>
                {weather && isCelcius ? day.temp : fahrenheit(day.temp)} &deg;
              </p>
            </div>
          ))}
        </div>
      </div>
    </Projected>
  );
};

export default Daily;
