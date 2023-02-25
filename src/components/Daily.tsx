import { Projected } from "./styled/Projected";

const Daily = () => {
  return (
    <Projected>
      <div>
        <h2>Daily Forecast</h2>
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

export default Daily;
