// import React from "react";
import React, { useState, useEffect } from "react";
import "./HelloComponent.css";
import { GoArrowRight } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";
import { motion, animate, useScroll } from "framer-motion";
import video from "../../src/assets/Video.png";
import Picture from "../../src/assets/Picture.png";
import Picture1 from "../../src/assets/Picture1.png";
import Picture2 from "../../src/assets/Picture2.png";
import Picture3 from "../../src/assets/Picture3.png";
import Hover from "../../src/assets/Hover.png";
import logo1 from "../../src/assets/Logo1.png";

const HelloComponent = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const [isOpenDesign, setIsOpenDesign] = useState(false);
  const [isOpenResearch, setIsOpenResearch] = useState(false);
  const [isOpenDevelop, setIsOpenDevelop] = useState(false);
  const [isOpenBranding, setIsOpenBranding] = useState(false);

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return (
    <>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5, type: "tween" }}
        >
          <h1 className="hello">
            Make your visual dreams come <span>true.</span>
          </h1>
        </motion.div>
        <div className="info">
          <h4>Digital agency New York</h4>
          <h4>
            Local time <GoArrowRight />{" "}
            <span className="time" style={{ color: "aqua" }}>
              {formattedTime}
            </span>
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
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              src={Picture}
              className="firstwork"
              alt="Description of your image"
            />
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              src={Picture1}
              className="firstwork"
              alt="Description of your image"
            />
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              src={Picture2}
              className="firstwork"
              alt="Description of your image"
            />
            <motion.img
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.1 }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              src={Picture3}
              className="firstwork"
              alt="Description of your image"
            />
          </div>
        </section>
        <section className="topics">
          <motion.div
            layout
            className="card"
            transition={{ layout: { duration: 1, type: "spring" } }}
            onMouseOver={() => setIsOpenDesign(!isOpenDesign)}
          >
            <motion.h1
              layout="position"
              whileHover={{ scale: 1.3, color: "#00cccc", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Design
            </motion.h1>

            {isOpenDesign && (
              <motion.div className="topics-details">
                <img src="https://images.pexels.com/photos/323645/pexels-photo-323645.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
                <h3 className="description">
                  Unleash your brand's potential with our design-as-a-service,
                  merging creativity and functionality for visually striking and
                  impactful solutions.
                </h3>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            layout
            className="card"
            transition={{ layout: { duration: 1, type: "spring" } }}
            onMouseOver={() => setIsOpenResearch(!isOpenResearch)}
          >
            <motion.h1
              layout="position"
              whileHover={{ scale: 1.3, color: "#00cccc", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Research
            </motion.h1>

            {isOpenResearch && (
              <motion.div className="topics-details">
                <img src={Hover}></img>
                <h3 className="description">
                  Empower your insights with our research services, leveraging
                  rigorous methodologies to uncover valuable data and drive
                  informed decisions.
                </h3>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            layout
            className="card"
            transition={{ layout: { duration: 1, type: "spring" } }}
            onMouseOver={() => setIsOpenDevelop(!isOpenDevelop)}
          >
            <motion.h1
              layout="position"
              whileHover={{ scale: 1.3, color: "#00cccc", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Develop
            </motion.h1>

            {isOpenDevelop && (
              <motion.div className="topics-details">
                <img src="https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <h3 className="description">
                  Unlock your digital potential through our development
                  services, where innovation and expertise converge to craft
                  scalable and cutting-edge solutions
                </h3>
              </motion.div>
            )}
          </motion.div>

          <motion.div
            layout
            className="card"
            transition={{ layout: { duration: 1, type: "spring" } }}
            onMouseOver={() => setIsOpenBranding(!isOpenBranding)}
          >
            <motion.h1
              layout="position"
              whileHover={{ scale: 1.3, color: "#00cccc", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Branding
            </motion.h1>

            {isOpenBranding && (
              <motion.div className="topics-details">
                <img src="https://images.pexels.com/photos/1437318/pexels-photo-1437318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <h3 className="description">
                  Elevate your brand's allure through our strategic branding,
                  fusing creativity with purpose for a lasting market impact.
                </h3>
              </motion.div>
            )}
          </motion.div>

          {/* <motion.h1
            whileHover={{ scale: 1.3, color: "#00cccc", originX: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Research
          </motion.h1>
          <motion.h1
            whileHover={{ scale: 1.3, color: "#00cccc", originX: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Develop
          </motion.h1>
          <motion.h1
            whileHover={{ scale: 1.3, color: "#00cccc", originX: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Branding
          </motion.h1> */}
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

          <h3 className="sendmail">
            <u>Send My Message</u>
            <span>
              <GoArrowRight />
            </span>
          </h3>
        </div>
      </div>
      <footer>
        <section className="footer-section">
          <div>
            <h3>2020 Agency. All Rights Reserved</h3>
            <div style={{ display: "flex", gap: "20px" }} className="social">
              <h5>Awwwards</h5>
              <h5>Dribble</h5>
              <h5>Reddit</h5>
              <h5>Behance</h5>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <div className="abc">
              <h3>Blogs</h3>
              <h3>Privacy Policy</h3>
              <h3>Works</h3>
            </div>
            <div className="def">
              <h3>About Us</h3>
              <h3>Works</h3>
              <h3>Careers</h3>
            </div>
          </div>
        </section>

        <img src={logo1}></img>
      </footer>
    </>
  );
  s;
};

export default HelloComponent;
