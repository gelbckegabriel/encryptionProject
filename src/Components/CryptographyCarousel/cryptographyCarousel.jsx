import React, { useState } from "react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from "https://cdn.skypack.dev/react-icons/ti";
import Styles from "./style.module.scss";
import { Link } from "react-router-dom";

const CARDS = 10;
const MAX_VISIBILITY = 3;

const cardValues = [
  {
    redirect: "/gelbckeencryption",
    title: "Gelbcke's Encryption",
    content: "TEST",
    button: "Access"
  },
  {
    redirect: "/anagram",
    title: "Anagram",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    redirect: "/",
    title: "Symmetric Key Algorithm",
    content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Card = ({ redirect, title, content, button }) => (
  <div className={Styles.card}>
    <h2 style={{ textDecoration: "none" }}>{title}</h2>
    <p style={{ textDecoration: "none" }}>{content}</p>
    <Link to={redirect}>
      <button className="btn btn-primary">{button}</button>
    </Link>
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  return (
    <div className={Styles.carousel}>
      {active > 0 && (
        <button
          className={`${Styles.nav} ${Styles.left}`}
          onClick={() => setActive((i) => i - 1)}
        >
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className={Styles.cardContainer}
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className={`${Styles.nav} ${Styles.right}`}
          onClick={() => setActive((i) => i + 1)}
        >
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

const CryptographyCarousel = () => (
  <div style={{ marginLeft: "40%" }} className={Styles.app}>
    <Carousel>
      {cardValues.map((row) => (
        <Card
          redirect={row.redirect}
          title={row.title}
          content={row.content}
          button={row.button}
        />
      ))}
    </Carousel>
  </div>
);

//ReactDOM.render(<App />, document.body);

export default CryptographyCarousel;
