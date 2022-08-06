import React from "react";
import styles from "../../styles/Register.module.scss";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Link from "next/link";

function Register() {
  const handleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className={styles.register_container}>
      <div className={styles.register}>
        <div className={styles.signup_header}>Sign up for your account</div>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Enter email" />
          <input type="password" placeholder="Enter password" />
          <input type="password" placeholder="Confirm password" />
          <button type="submit">Sign up</button>
          
        </form>
      </div>
    </div>
  );
}

export default Register;
