import React, { useEffect } from "react";

const GelbckeEncryption = () => {
  useEffect(() => {
    function hideModal() {
      document.getElementById("modal").style.display = "none";
    }
    hideModal();
  });

  function hideModal() {
    document.getElementById("modal").style.display = "none";
  }

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
      <div class="container">
        <br />

        <textarea
          class="mx-5"
          name="input"
          id="input"
          cols="30"
          rows="5"
          placeholder="INPUT"
        ></textarea>

        <textarea
          name="result"
          id="result"
          cols="30"
          rows="5"
          placeholder="RESULT"
        ></textarea>

        <button
          type="button"
          id="buttonTest"
          class="btn btn-primary"
          onClick={() => convertToEncryption()}
        >
          TEST
        </button>
      </div>

      <div
        class="modal modal-sheet position-static d-block bg-body-secondary p-3 py-md-3"
        tabIndex="-1"
        role="dialog"
        id="modalChoice"
      >
        <div class="modal-dialog" id="modal" role="document">
          <div class="modal-content rounded-3 shadow">
            <div class="modal-body p-4 text-center">
              <h5 class="mb-0">
                <strong>Alert</strong>
              </h5>
              <br />
              <p class="mb-0">Please insert your text in the input field!</p>
            </div>
            <div class="modal-footer flex-nowrap p-0">
              <button
                type="button"
                class="btn btn-lg btn-link fs-6 text-decoration-none col-12 py-3 m-0 rounded-0 border-end"
                onClick={() => hideModal()}
              >
                <strong>Close</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GelbckeEncryption;
