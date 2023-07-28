import React from "react";
import { Link } from "react-router-dom";
import CryptographyCarousel from "../../Components/CryptographyCarousel/CryptographyCarousel";
import Styles from "./style.module.scss";

const EncryptList = () => {

  let cardsInfo = [
    {
      redirect: "/symmetric",
      image: "/Images/CryptographyImage.jpg",
      category: "Cryptography",
      title: "Symmetric Key Alg.",
      subtitle: "Message encryption",
      description:
        "Symmetric key algorithms are algorithms for cryptography that use the same cryptographic key for plaintext encryption and ciphertext decryption.",
      footerTime: "135 min",
      footerComments: "0 comments",
    },
    {
      redirect: "/anagram",
      image: "/Images/AnagramImage.png",
      category: "Anagram",
      title: "Anagram",
      subtitle: "Words shuffle",
      description:
        "Anagram is a kind of wordplay created by rearranging the letters of a word or phrase to produce other words or phrases, in this case, it will be random. Some examples are Iracema | America and Love | Rome.",
      footerTime: "70 min",
      footerComments: "0 comments",
    },
    {
      redirect: "/gelbckeencryption",
      image: "/Images/GelbckeEnctyption.jpg",
      category: "Personal",
      title: "Gelbcke's Encryption",
      subtitle: "My own encryption method",
      description:
        "The idea of this encryption is to get the first letter of a word and convert to the UniCode value, and then swap the second letter with the last letter of the same word.",
      footerTime: "50 min",
      footerComments: "0 comments",
    },
  ];

  return (
    <>
      <div style={{ position: "relative", margin: "500px", marginTop: "50px" }}>
        <ul>
          {cardsInfo.map((row) => (
            <li className={Styles.card}>
              <header className={Styles.card__thumb}>
                <Link to={row.redirect}>
                  <img src={row.image} style={{ objectFit: "cover" }} />
                </Link>
                <div className={Styles.card__category}>
                  <a href="#">{row.category}</a>
                </div>
              </header>
              <Link to={row.redirect}>
                <div className={Styles.card__body}>
                  <div className={Styles.card__title}>
                    <span>{row.title}</span>
                  </div>
                  <div className={Styles.card__subtitle}>{row.subtitle}</div>
                  <p className={Styles.card__description}>{row.description}</p>
                </div>
              </Link>
              <footer className={Styles.card__footer}>
                <span className={`${Styles.icon} ${Styles.icon_time}`} style={{ paddingLeft: '5px' }}>
                  {row.footerTime}
                </span>
                {/* <span className={`${Styles.icon} ${Styles.icon_comment}`}>
                  <a href="#">{row.footerComments}</a>
                </span> */}
              </footer>
            </li>
          ))}
        </ul>
      </div>

      <br />
    </>
  );
};

export default EncryptList;
