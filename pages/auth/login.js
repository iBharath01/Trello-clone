import React, { useState } from "react";
import styles from "../../styles/Login.module.scss";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { async } from "@firebase/util";

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError(true);
      });
  };

  const provider = new GoogleAuthProvider();
  const signIn = async () => {
    const {user}= await signInWithPopup(auth, provider);
    const {refreshToken, providerData } = user;
    
    localStorage.setItem("user", JSON.stringify(providerData));
    localStorage.setItem("accessToken", JSON.stringify(refreshToken));
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login}>
        <div className={styles.login_header}>Log in to Trello</div>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="Submit">Log in</button>
          {error && <span className="span">wrong email or password </span>}
        </form>
        <Link href={"/auth/register"}>
          <div className={styles.signup_text}>Sign up for an account</div>
        </Link>
        <div className={styles.or}>OR</div>
        <div className={styles.google} onClick={signIn}>
          <div></div>
          <FcGoogle />
          <div>Sign in with Google</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
