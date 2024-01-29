import React from "react";
import "./HelloComponent.css";
import { GoArrowRight } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import video from "../../src/assets/Video.png";
import Picture from "../../src/assets/Picture.png";
import Picture1 from "../../src/assets/Picture1.png";
import Picture2 from "../../src/assets/Picture2.png";
import Picture3 from "../../src/assets/Picture3.png";

const HelloComponent = () => {
  // Create a new Date object
  const currentDate = new Date();

  // Get the current time components
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Format the time
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Display the current time
  console.log("Current Time:", formattedTime);
  return (
    <>
      <div>
        <h1 className="hello">
          Make your visual dreams come <span>true.</span>
        </h1>
        <div className="info">
          <h4>Digital agency New York</h4>
          <h4>
            Local time <GoArrowRight /> {formattedTime}
          </h4>
          <GoArrowDown />
          <h4>
            <a href="#contact"></a>Lets Talk
            <GoArrowRight />
          </h4>
        </div>
        <div className="marquee">
          <img src="https://assets-global.website-files.com/64c6a8358a42b2304eadb1f5/6565ca4d562a403aa717d28b_vcm_logo.svg"></img>
          <img
            src="https://assets-global.website-files.com/64c6a8358a42b2304eadb1f5/64d39eacb11be3af8e507dc4_NEPTUNUS_logo.svg"
            loading="lazy"
            alt=""
            class="referenzlogo"
          ></img>
          <img
            src="https://assets-global.website-files.com/64c6a8358a42b2304eadb1f5/64d39eef777a99b63f25f920_SCHLUMBERGER_logo.svg"
            loading="lazy"
            alt=""
            class="referenzlogo"
          ></img>
          <img
            src="https://assets-global.website-files.com/64c6a8358a42b2304eadb1f5/64d39e53eba02465277a3f2d_GRAFPARTNER_logo.svg"
            loading="lazy"
            alt=""
            class="referenzlogo"
          ></img>
          <img
            src="https://assets-global.website-files.com/64c6a8358a42b2304eadb1f5/64c6aff5646a08f933ae3112_karma-logo-redbull-1.svg"
            loading="lazy"
            alt=""
            class="referenzlogo"
          ></img>
          <img
            src="https://assets-global.website-files.com/64c6a8358a42b2304eadb1f5/6565c18ccea4da87553025ed_belvedere_new.svg"
            loading="lazy"
            alt=""
            class="referenzlogo"
          ></img>
          <img
            src="https://assets-global.website-files.com/64c6a8358a42b2304eadb1f5/6565bad9d53c2e9d012b3443_ardbeg-new.svg"
            loading="lazy"
            alt=""
            class="referenzlogo"
          ></img>
          <img
            src="https://assets-global.website-files.com/64c6a8358a42b2304eadb1f5/64d39e9d3cf0c5637aab8fb2_JACKWOLFSKIN_logo.svg"
            loading="lazy"
            alt=""
            class="referenzlogo"
          ></img>
          <img
            src="https://assets-global.website-files.com/64c6a8358a42b2304eadb1f5/64c6afba3efd28e378c1df36_karma-logo-esterhazy-weingut-1.svg"
            loading="lazy"
            alt=""
            class="referenzlogo"
          ></img>
        </div>
        <div className="video">
          <img src={video}></img>
        </div>
        <div className="desc" id="about">
          <h1>
            <span>Located in the heart </span>of New York City,
            <span>we excel in</span>
            crafting digital experiences that connect with users on a profound
            level, <span>fostering meaningful engagement.</span>
          </h1>
        </div>
        <section className="works" id="works">
          <div className="child">
            <h1>Our Works</h1>
          </div>
          <div className="child">
            <h2>
              Some of the best works that created by our team, we always make
              sure your idea and dream come true.
            </h2>
          </div>
          <div className="child">
            <img src={Picture} className="firstwork"></img>
            <img src={Picture1}></img>
            <img src={Picture2} className="thirdwork"></img>
            <img src={Picture3}></img>
          </div>
        </section>
        <section className="topics">
          <h1>Design</h1>
          <h1>Research</h1>
          <h1>Develop</h1>
          <h1>Branding</h1>
        </section>
        <div className="milestones">
          <div>
            <h1 className="count">500+</h1>
            <h4
              style={{
                margin: 0,
                fontWeight: 400,
                color: "darkgray",
              }}
            >
              Projects
            </h4>
            <h3>Designed and developed</h3>
          </div>
          <div>
            <h1 className="count">5+</h1>
            <h4
              style={{
                margin: 0,
                fontWeight: 400,
                color: "darkgray",
              }}
            >
              Years
            </h4>
            <h3>Experience in designing</h3>
          </div>
          <div>
            <h1 className="count">150+</h1>
            <h4
              style={{
                margin: 0,
                fontWeight: 400,
                color: "darkgray",
              }}
            >
              Clients
            </h4>
            <h3>With different kind of background</h3>
          </div>
        </div>
        <div className="contact" id="contact">
          <h1>Contact us</h1>
          <input class="line-input" placeholder="Your email" />
          <input class="line-input" placeholder="Message" />
        </div>
      </div>
      <footer>
        <h1>"LOGO"</h1>
      </footer>
    </>
  );
  s;
};

export default HelloComponent;
