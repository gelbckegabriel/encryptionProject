import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Styles from "./style.module.scss";

/* IMAGES */
import HeroImage from "../../../public/Images/Cryptography-Hero.jpg";
import GelbckeEncryption from "../../../public/Images/gelbcke_encryption.jpg";
import Anagram from "../../../public/Images/anagram.png";
import HashFunctions from "../../../public/Images/hash_functions.jpg";

const Home = () => {
  return (
    <>
      {/* MAIN HERO CARD */}
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src={HeroImage}
              /*src={require("../../Public/Images/Cryptography-Hero.jpg")}*/
              style={{
                filter:
                  "brightness(110%) contrast(100%) drop-shadow(14px 15px 12px gray)",
              }}
              class="d-block mx-lg-auto img-fluid"
              alt="Cryptography"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Encrypt Project
            </h1>
            <p class="lead">
              This project started as a desire of mine to be able to work more
              with data manipulation. Cryptography is something that fascinates
              me and I wanted to work with something on my own, to develop codes
              to encrypt texts, either proprietary or existing encryption
              techniques.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link
                to="/encryptlist"
                onClick={function scrollWin() {
                  window.scrollTo(0, 0);
                }}
              >
                <button
                  type="button"
                  className={Styles.button}
                  class="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Access Library
                </button>
              </Link>
              <a href="mailto:gabrielgelbcke@gmail.com">
                <button
                  className={Styles.button}
                  type="button"
                  class="btn btn-outline-secondary btn-lg px-4"
                >
                  Contact Me
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div class="container px-4 py-5" id="custom-cards">
        <h2 class="pb-2 border-bottom">Summary of cryptographic algorithms</h2>

        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col" className={Styles.card}>
            <Link to="/">
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${GelbckeEncryption})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Gelbcke's Encryption
                  </h3>
                </div>
              </div>
            </Link>
          </div>

          <div class="col" className={Styles.card}>
            <Link to="/">
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${Anagram})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Anagram</h3>
                </div>
              </div>
            </Link>
          </div>

          <div class="col" className={Styles.card}>
            <Link to="/">
              <div
                class="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
                style={{ backgroundImage: `url(${HashFunctions})` }}
              >
                <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                  <h3 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    Hash functions
                  </h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
