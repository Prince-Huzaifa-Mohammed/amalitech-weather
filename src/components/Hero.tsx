import { StyledHero } from "./styled/StyledHero";
import { CgCompress } from "react-icons/cg";
import { FaEye, FaWind } from "react-icons/fa";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { MdWaterDrop } from "react-icons/md";

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <h2>2nd January, 2023</h2>
        <div>
          <h1>
            <span>Accra, </span> <span>Ghana</span>
          </h1>
          <article>
            <h5>100 &deg;</h5>
            {/* <h5>{weather?.currentTemperature} &deg;</h5> */}
            <h5>Clear</h5>
          </article>

          <section>
            <div>
              <div>
                <div>
                  <MdWaterDrop />
                  <p>UV Index</p>
                </div>
                <p>100</p>
              </div>

              <div>
                <div>
                  <CgCompress />
                  <p>Pressure</p>
                </div>
                <p>100 mb</p>
              </div>

              <div>
                <div>
                  <FaWind />
                  <p>Wind</p>
                </div>
                <p>100 km/h</p>
              </div>
            </div>

            <div>
              <div>
                <div>
                  <FaEye />
                  <p>Visibility</p>
                </div>
                <p>100 m</p>
              </div>

              <div>
                <div>
                  <GiSunrise />
                  <p>Sunrise</p>
                </div>
                <p>100</p>
              </div>

              <div>
                <div>
                  <GiSunset />
                  <p>Sunset</p>
                </div>
                <p>100</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
