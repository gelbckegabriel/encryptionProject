import React from "react";
import Styles from "./style.module.scss";

const Anagram = () => {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function calculateAnagramPossibilities() {
    let word = document.getElementById("input").value;

    // SET THE WORD TO THE <p> AND REMOVE ACCENTS + FORMAT THE LETTERS TO LOWER CASE.
    document.getElementById("word").innerText = word;
    word = word
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

    let repeats = {};
    let numerator = [];
    let denominator = [];
    let denominatorVerify = [];
    let denominatorClean = [];
    let numeratorValue = 1;
    let denominatorValue = 1;
    let possibleAmount = 0;

    // ADD THE REPEATED CHARS INTO AN OBJECT.
    for (let x = 0; x < word.length; x++) {
      var l = word.charAt(x);
      repeats[l] = isNaN(repeats[l]) ? 1 : repeats[l] + 1;
    }

    // FIND THE NUMERATORS VALUES FOR MULTIPLICATION.
    for (let x = 1; x <= word.length; x++) {
      numerator.push(x);
    }

    // FIND THE ACTUAL VALUE OF THE NUMERATOR FOR DIVISION.
    for (let x = 0; x < numerator.length; x++) {
      numeratorValue = numeratorValue * numerator[x];
    }

    // DISCOVER THE DENOMINATOR VALUES FOR MULTIPLICATION.
    Object.values(repeats).forEach((value) => {
      denominator.push(value);
    });

    // FIND THE ACTUAL VALUE OF THE DENOMINATOR FOR DIVISION.
    for (let x = 0; x < denominator.length; x++) {
      if (denominator[x] == 2) {
        denominatorClean.push(denominator[x]);
      } else if (denominator[x] > 2) {
        for (let i = 1; i <= denominator[x]; i++) {
          denominatorVerify += i;
        }
        denominatorVerify = String(denominatorVerify)
          .split("")
          .map((num) => {
            return Number(num);
          });
        denominatorVerify = denominatorVerify.reduce(function (product, value) {
          return product * value;
        });
        denominatorClean.push(denominatorVerify);
      }
    }
    // MULTIPLY EVERY NUMBER (BIGGER THAN 2) OF THE DENOMINATOR.
    if (denominatorClean.length > 1) {
      denominatorValue = denominatorClean.reduce(function (product, value) {
        return product * value;
      });
    }
    console.log(denominatorValue);

    // MAKE THE FINAL DIVISION TO THE TOTAL OF VARIATIONS.
    possibleAmount = numeratorValue / denominatorValue;
    possibleAmount = possibleAmount.toLocaleString("en-US");

    // SET THE TOTAL NUMBER OF VARIATIONS TO THE <p>
    document.getElementById("possibleAmount").innerText = possibleAmount;
  }

  function convertToAnagram() {
    let text = document.getElementById("input").value;
    let splitted = text.split(" ");
    let word = [];
    let convertedText = [];

    for (let i = 0; i < splitted.length; i++) {
      word = splitted[i];
      word = word.split("");

      if (word.length > 1) {
        word.sort(function () {
          return 0.5 - Math.random();
        });
        word = word.join("");
        convertedText.push(word);
      } else {
        convertedText.push(word[0]);
      }
    }

    convertedText = convertedText.join(" ");

    document.getElementById("result").value = convertedText;
  }

  return (
    <>
      <br />
      <div className="container">
        <div>
          <div>
            <label htmlFor="word">Word:</label>
            <input
              style={{ marginLeft: "10px" }}
              type="text"
              id="input"
              placeholder="Type a single word..."
            />
            <button
              style={{ marginLeft: "5px" }}
              className={Styles.styledButton}
              onClick={() => calculateAnagramPossibilities()}
            >
              Calculate
            </button>
          </div>

          <div>
            <p>
              There are <strong id="possibleAmount">*</strong> possible anagrams
              for the word "<strong id="word"> </strong>" !
            </p>
          </div>
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
            onClick={() => convertToAnagram()}
          >
            Encrypt
          </button>
        </div>
      </div>
    </>
  );
};

export default Anagram;
