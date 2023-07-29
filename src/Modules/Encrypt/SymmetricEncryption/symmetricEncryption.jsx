import React from "react";
import Styles from "./style.module.scss";

const Symmetric = () => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function convertToEncryption() {
    let text = document
      .getElementById("input")
      .value.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    let key = parseInt(document.getElementById("key").value);
    let textSplitted = text.split(" ");
    let wordSplitted = [];
    let newText = [];

    if (text == "") {
      window.alert("Please insert your text in the input field!");
    } else if (isNaN(key)) {
      document.getElementById("key").value = "";
      window.alert("Please insert a number in the key field!");
    } else {
      for (let i = 0; i < textSplitted.length; i++) {
        wordSplitted = textSplitted[i].split("");
        for (let i = 0; i < wordSplitted.length; i++) {
          let index = alphabet.indexOf(wordSplitted[i]);
          if (alphabet.includes(wordSplitted[i])) {
            if (index + key <= 25) {
              wordSplitted[i] = alphabet[index + key];
            } else {
              index = index + key - 25 - 1;
              wordSplitted[i] = alphabet[index];
            }
          }
        }
        wordSplitted = wordSplitted.join("");
        newText.push(wordSplitted);
      }
      newText = newText.join(" ");
      document.getElementById("result").value = newText;
    }
  }

  return (
    <>
      <div className="container">
        <br />

        <div
          className="mx-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <input
            type="number"
            name="key"
            id="key"
            placeholder="Key (Number)"
            style={{ width: "175px" }}
          />
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
        </div>
      </div>
    </>
  );
};

export default Symmetric;
