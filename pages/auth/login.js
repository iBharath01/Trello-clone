import React, { useState } from "react";
import styles from "../../styles/Login.module.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
// import { useNavigate } from "react-router-dom";

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // navigate("/")
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
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
        <button type="submit">Log in</button>
        {error && <span className="span">wrong email or password </span>}
      </form>
    </div>
    </div>
  );
}

export default Login;
