import React from "react";
import { Link } from "react-router-dom";
import Styles from "./style.module.scss";

/* IMAGES */
import HeroImage from "/Images/Cryptography-Hero.jpg";
import GelbckeEncryption from "/Images/gelbcke_encryption.jpg";
import Anagram from "/Images/anagram.png";
import HashFunctions from "/Images/hash_functions.jpg";

const Home = () => {
  return (
    <>
      {/* MAIN HERO CARD */}
      <div className="container col-xxl-8 px-4 py-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={HeroImage}
              /*src={require("../../Public/Images/Cryptography-Hero.jpg")}*/
              style={{
                filter:
                  "brightness(110%) contrast(100%) drop-shadow(14px 15px 12px gray)",
              }}
              className="d-block mx-lg-auto img-fluid"
              alt="Cryptography"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Encrypt Project
            </h1>
            <p className="lead">
              This project started as a desire of mine to be able to work more
              with data manipulation. Cryptography is something that fascinates
              me and I wanted to work with something on my own, to develop codes
              to encrypt texts, either proprietary or existing encryption
              techniques.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link
                to="/encryptlist"
                onClick={function scrollWin() {
                  window.scrollTo(0, 0);
                }}
              >
                <button
                  type="button"
                  className={`btn btn-primary btn-lg px-4 me-md-2 ${Styles.button}`}
                >
                  Access Library
                </button>
              </Link>
              <a href="https://www.linkedin.com/in/gabriel-gelbcke-874930159/" target="_blank">
                <button
                  className={`btn btn-outline-secondary btn-lg px-4 ${Styles.button}`}
                  type="button"
                >
                  Contact Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
