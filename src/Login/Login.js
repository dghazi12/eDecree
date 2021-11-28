import { useState } from "react";
import "./Login.css";

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignup,
  hasAccount,
  setHasAccount,
  emailError,
  passwordError,
}) => {
  const [containsUL, setContainsUL] = useState(false); // uppercase letter
  const [containsLL, setContainsLL] = useState(false); // lowercase letter
  const [containsSC, setContainsSC] = useState(false); // special character
  const [contains6C, setContains6C] = useState(false); // min 6 characters

  // checks all validations are true
  const [allValid, setAllValid] = useState(false);

  const mustContainData = [
    ["A lowercase letter (a-z)", containsUL],
    ["An uppercase letter (A-Z)", containsLL],
    ["A special character (!@#$)", containsSC],
    ["At least 6 characters", contains6C],
  ];

  const validatePassword = () => {
    // has uppercase letter
    if (password.toUpperCase() !== password) setContainsUL(true);
    else setContainsUL(false);

    // has lowercase letter
    if (password.toLowerCase() !== password) setContainsLL(true);
    else setContainsLL(false);

    // has special character
    if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password))
      setContainsSC(true);
    else setContainsSC(false);

    // has 6 characters
    if (password.length >= 6) setContains6C(true);
    else setContains6C(false);

    // all validations passed
    if (containsUL && containsLL && containsSC && contains6C) setAllValid(true);
    else setAllValid(false);
  };

  return (
    <div className="login-container">
      <label>Username </label>
      <input
        className="login-input"
        id="email"
        placeholder="Enter Email"
        type="text"
        autoFocus
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>{emailError}</p>
      <label>Password </label>
      <div>{mustContainData.map((data) => console.log(data))}</div>
      <input
        className="login-input"
        type="password"
        placeholder="Enter Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyUp={validatePassword}
      />
      <p>{passwordError}</p>

      <div>
        {hasAccount ? (
          <>
            <button className="main-button" onClick={handleLogin}>
              Sign In
            </button>
            <p>
              Don't have an account?
              <button
                className="second-button"
                onClick={() => setHasAccount(!hasAccount)}
              >
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <button className="main-button" onClick={handleSignup}>
              Sign Up
            </button>
            <p>
              Have an account?
              <button
                className="second-button"
                onClick={() => setHasAccount(!hasAccount)}
              >
                Sign In
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
