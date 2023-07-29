import React, { useEffect, useRef } from "react";
import Styles from "./style.module.scss";

const GelbckeEncryption = () => {
  const buttonContainerRef = useRef(null);
  const howDoesItWorkButtonRef = useRef(null);

  useEffect(() => {
    // Obtém o width do contêiner dos botões Encrypt e Decrypt
    const buttonContainerWidth = buttonContainerRef.current.offsetWidth;
    // Aplica o width do contêiner ao botão "How does it work?"
    const howDoesItWorkButton = howDoesItWorkButtonRef.current;
    if (howDoesItWorkButton) {
      howDoesItWorkButton.style.width = `${buttonContainerWidth}px`;
    }
  }, []);

  function convertToEncryption() {
    let text = document.getElementById("input").value;

    let splitted = text.split(" ");
    let new_phrase = [];
    let word_setter = "";
    let second_letter = "";
    let last_letter = "";

    if (text == "") {
      /* document.getElementById("modal").style.display = "inline"; */
      window.alert("Please insert your text in the input field!");
    } else {
      for (let i = 0; i < splitted.length; i++) {
        word_setter = splitted[i].split("");
        word_setter[0] = String(splitted[i].charCodeAt(0));

        if (word_setter.length > 1) {
          second_letter = word_setter[1];
          last_letter = word_setter[word_setter.length - 1];
          word_setter[1] = String(last_letter);
          word_setter[word_setter.length - 1] = String(second_letter);
          word_setter = word_setter.join("");
          new_phrase.push(word_setter);
        } else {
          word_setter = word_setter.join("");
          new_phrase.push(word_setter);
        }
      }
    }
    console.log(new_phrase);
    new_phrase = new_phrase.join(" ");
    document.getElementById("result").value = new_phrase;
  }

  function convertToText() {}

  return (
    <>
      <div className="container">
        <br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            type="button"
            ref={howDoesItWorkButtonRef}
            className={Styles.styledButtonQuestion}
            style={{ marginLeft: "5px" }}
          >
            How does it work?
          </button>
        </div>

        <br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <textarea
            name="input"
            id="input"
            cols="30"
            rows="5"
            placeholder="Decrypted Message..."
          ></textarea>

          <textarea
            name="result"
            id="result"
            cols="30"
            rows="5"
            placeholder="Encrypted Message..."
            style={{ marginLeft: "5px" }}
          ></textarea>
        </div>

        <br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <span ref={buttonContainerRef}>
            <button
              type="button"
              id="buttonTest"
              className={Styles.styledButton}
              onClick={() => convertToEncryption()}
            >
              Encrypt
            </button>
            <button
              type="button"
              id="buttonTest"
              className={Styles.styledButtonDecrypt}
              style={{ marginLeft: "5px" }}
              onClick={() => convertToEncryption()}
            >
              Decrypt
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default GelbckeEncryption;
