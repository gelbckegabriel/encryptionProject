import React from "react";
import { Link } from "react-router-dom";
import CryptographyCarousel from "../../Components/CryptographyCarousel/CryptographyCarousel";
import Styles from "./style.module.scss";

const EncryptList = () => {
  return (
    <>
      <div style={{ position: "relative", margin: "500px", marginTop: "50px" }}>
        <ul>
          <li className={Styles.card}>
            <header className={Styles.card__thumb}>
              <Link to="/">
                <img
                  src="../../../public/Images/CryptographyImage.jpg"
                  style={{ objectFit: "cover" }}
                />
              </Link>
              <div className={Styles.card__category}>
                <a href="#">Cryptography</a>
              </div>
            </header>
            <Link to="/">
              <div className={Styles.card__body}>
                <div className={Styles.card__title}>
                  <span>Symmetric Key Algorithm</span>
                </div>
                <div className={Styles.card__subtitle}>
                  Message encryption
                </div>
                <p className={Styles.card__description}>
                  Symmetric key algorithms are algorithms for cryptography that
                  use the same cryptographic key for plaintext encryption and
                  ciphertext decryption.
                </p>
              </div>
            </Link>
            <footer className={Styles.card__footer}>
              <span className={`${Styles.icon} ${Styles.icon_time}`}>
                50 min
              </span>
              <span className={`${Styles.icon} ${Styles.icon_comment}`}>
                <a href="#">0 comments</a>
              </span>
            </footer>
          </li>
          <li className={Styles.card}>
            <header className={Styles.card__thumb}>
              <Link to="/anagram">
                <img src="../../../public/Images/AnagramImage.png" />
              </Link>
              <div className={Styles.card__category}>
                <a href="#">Anagram</a>
              </div>
            </header>
            <Link to="/anagram">
              <div className={Styles.card__body}>
                <div className={Styles.card__title}>
                  <span>Anagram</span>
                </div>
                <div className={Styles.card__subtitle}>
                  Words shuffle
                </div>
                <p className={Styles.card__description}>
                  Anagram is a kind of wordplay created by rearranging the
                  letters of a word or phrase to produce other words or phrases,
                  in this case, it will be random. Some examples are Iracema |
                  America and Love | Rome.
                </p>
              </div>
            </Link>
            <footer className={Styles.card__footer}>
              <span className={`${Styles.icon} ${Styles.icon_time}`}>
                50 min
              </span>
              <span className={`${Styles.icon} ${Styles.icon_comment}`}>
                <a href="#">0 comments</a>
              </span>
            </footer>
          </li>
          <li className={Styles.card}>
            <header className={Styles.card__thumb}>
              <Link to="/gelbckeencryption">
                <img src="../../../public/Images/GelbckeEnctyption.jpg" />
              </Link>
              <div className={Styles.card__category}>
                <Link to="/gelbckeencryption">Personal</Link>
              </div>
            </header>
            <Link to="/gelbckeencryption">
              <div className={Styles.card__body}>
                <div className={Styles.card__title}>
                  <span>Gelbcke's Encryption</span>
                </div>
                <div className={Styles.card__subtitle}>
                  My own encryption method
                </div>
                <p className={Styles.card__description}>
                  The idea of this encryption is to get the first letter of a
                  word and convert to the UniCode value, and then swap the
                  second letter with the last letter of the same word.
                </p>
              </div>
            </Link>
            <footer className={Styles.card__footer}>
              <span className={`${Styles.icon} ${Styles.icon_time}`}>
                50 min
              </span>
              <span className={`${Styles.icon} ${Styles.icon_comment}`}>
                <a href="#">0 comments</a>
              </span>
            </footer>
          </li>
        </ul>
      </div>

      <br />
    </>
  );
};

export default EncryptList;
