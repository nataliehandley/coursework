import React, { useState } from "react";
import styles from "./Form.module.scss";

const Form = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;

    //validate the form

    if (!name || !email || !email.includes("@")) {
      setHasError(true);
      return;
    }

    setHasError(false);
    setHasSubmitted(true);
  };

  return (
    <>
      {!hasSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label htmlFor="username-input">Name</label>
            <input
              id="username-input"
              type="text"
              placeholder="e.g. John Doe"
            ></input>
            <label htmlFor="email-input">Email</label>
            <input
              id="email-input"
              type="text"
              placeholder="e.g test@test.com"
            ></input>
            <button id="form-submit" className={styles.button}>
              Sign in
            </button>

            {hasError && (
              <div className="alert">Sorry something went wrong</div>
            )}
          </div>
        </form>
      ) : (
        <div>
          <p className="success">Thank you for submitting!We'll be in touch</p>
        </div>
      )}
    </>
  );
};

export default Form;
