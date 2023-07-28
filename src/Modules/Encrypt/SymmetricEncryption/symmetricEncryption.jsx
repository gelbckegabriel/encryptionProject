import React from "react";

const Symmetric = () => {
  return (
    <>
      <div className="container">
        <br />

        <textarea
          className="mx-5"
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
          className="btn btn-primary"
          onClick={() => convertToEncryption()}
        >
          TEST
        </button>
      </div>
    </>
  );
};

export default Symmetric;
