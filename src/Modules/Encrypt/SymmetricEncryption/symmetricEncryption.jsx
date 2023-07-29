import React, { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";

import Styles from "./style.module.scss";

const Symmetric = () => {
  const buttonContainerRef = useRef(null);
  const howDoesItWorkButtonRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    console.log("open");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    // Obtém o width do contêiner dos botões Encrypt e Decrypt
    const buttonContainerWidth = buttonContainerRef.current.offsetWidth;
    // Aplica o width do contêiner ao botão "How does it work?"
    const howDoesItWorkButton = howDoesItWorkButtonRef.current;
    if (howDoesItWorkButton) {
      howDoesItWorkButton.style.width = `${buttonContainerWidth}px`;
    }
  }, []);

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

  async function waitOneSecondAsync() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

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

    // VERIFY IF THERE IS A MESSAGE IN THE INPUT FIELD.
    if (text == "") {
      window.alert("Please insert your text in the input field!");
    }
    // VERIFY IF THERE IS A NUMBER IN THE KEY FIELD.
    else if (isNaN(key)) {
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
      // FUNCTION TO DELETE THE TEXT AFTER THE ENCRYPTION.
      (async () => {
        await waitOneSecondAsync();
        document.getElementById("input").value = "TEXT DELETED!";
      })();
    }
    newText = newText.join(" ");
    document.getElementById("result").value = newText;
  }

  function convertToText() {
    let text = document
      .getElementById("result")
      .value.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    let key = parseInt(document.getElementById("key").value);
    let textSplitted = text.split(" ");
    let wordSplitted = [];
    let newText = [];

    // VERIFY IF THERE IS A MESSAGE IN THE INPUT FIELD.
    if (text == "") {
      window.alert("Please insert your text in the encryption field!");
    }
    // VERIFY IF THERE IS A NUMBER IN THE KEY FIELD.
    else if (isNaN(key)) {
      document.getElementById("key").value = "";
      window.alert("Please insert a number in the key field!");
    } else {
      for (let i = 0; i < textSplitted.length; i++) {
        wordSplitted = textSplitted[i].split("");
        for (let i = 0; i < wordSplitted.length; i++) {
          let index = alphabet.indexOf(wordSplitted[i]);
          if (alphabet.includes(wordSplitted[i])) {
            if (index - key < 0) {
              index = index + 26 - key;
              wordSplitted[i] = alphabet[index];
            } else if (index - key >= 0) {
              wordSplitted[i] = alphabet[index - key];
            }
          }
        }
        wordSplitted = wordSplitted.join("");
        newText.push(wordSplitted);
      }
    }
    newText = newText.join(" ");
    document.getElementById("input").value = newText;
  }

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
            onClick={() => handleOpenModal()}
          >
            How does it work?
          </button>
        </div>

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
            min={1}
            max={25}
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
              onClick={() => convertToText()}
            >
              Decrypt
            </button>
          </span>
        </div>

        <Modal
          className={Styles.modal}
          show={showModal}
          onHide={handleCloseModal}
          centered
        >
          <Modal.Header className={Styles.customModalHeader} closeButton>
            <Modal.Title>Encryption Method</Modal.Title>
          </Modal.Header>
          <Modal.Body className={Styles.customModalBody}>
            <p>
              This encryption will perform a "Cesar's Cypher" with the key
              number that you provide.
              <br />
              <br />
              What is an example of this cypher?
              <br />
              <ul>
                <li>'ABC' with key 1 = 'BCD'</li>
                <li>'Gelbcke' with key 2 = 'Igndemg'</li>
              </ul>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <p>
              Message for encryption on the left.
              <br />
              Message for decryption on the right.
            </p>
          </Modal.Footer>
        </Modal>

        <br />
      </div>
    </>
  );
};

export default Symmetric;
