import React from "react";

const GelbckeEncryption = () => {
  return (
    <>
      <br />
      <textarea
        class="mx-5"
        name="input"
        id="input"
        cols="30"
        rows="10"
        placeholder="INPUT"
      ></textarea>

      <textarea
        name="result"
        id="result"
        cols="30"
        rows="10"
        placeholder="RESULT"
      ></textarea>

      <br />
      <br />
      <br />

      <div class="container">
        <form>
          <fieldset>
            <legend>DOM Manipulation using Python</legend>
            <div>
              <label for="inputTest">Test Text:</label>
              <input
                type="text"
                id="inputTest"
                placeholder="Enter text..."
                style={{ marginLeft: "10px" }}
              />
            </div>
            <br />
            <br />
            <div>
              <strong>THE RESULT IS: &nbsp;</strong>
              <a href="#" style={{ color: "blue" }} id="outputTest"></a>.
            </div>
            <br />
            <button
              type="button"
              id="buttonTest"
              class="btn btn-primary"
              pys-onClick={pythonExec}
            >
              TEST
            </button>
            <br />
            <button type="reset" id="clearButton" class="btn btn-secondary">
              Clear
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default GelbckeEncryption;
