import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <div className="heading">ABOUT US</div>
            <p>The only thing we are serious about is food.</p>
          </div>
          <p className="mid">
          Welcome to Tip Top! We're a friendly restaurant dedicated to serving delicious
           food in a warm and welcoming atmosphere. Whether you're here for a family meal,
            a date night, or a casual hangout, we promise great taste and excellent service.
             Join us and make every meal special at Tip Top!.
          </p>

          <Link 
          to="menu"
          spy={true}
          smooth={true}
          duration={500} 
         >
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
