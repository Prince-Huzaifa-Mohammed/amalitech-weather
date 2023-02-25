import { Projected } from "./Projected";

const Hourly = () => {
  return (
    <Projected>
      <div>
        <h2>Hourly Forecast</h2>
        <div>
          <div>
            <span>10:24</span>
            <img
              //  src={`http://openweathermap.org/img/wn/${hour.icon}@2x.png`}
              alt=""
            />
            <p>10 &deg;</p>
          </div>
        </div>
      </div>
    </Projected>
  );
};

export default Hourly;
