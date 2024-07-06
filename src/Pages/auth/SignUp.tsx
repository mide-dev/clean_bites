import AuthContext from "@/AuthProvider";
import { createUser } from "@/constants/api";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { setIsAuth } = useContext(AuthContext);
  const userRef = useRef();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const userInfo = {
    password: password,
    email: email,
    first_name: firstName,
    last_name: lastName,
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const data = await createUser(userInfo);
    if (data.id) {
      navigate("/login?signup=success");
    } else if (data.email) {
      setErrMsg(data.email);
    } else if (data.password) {
      setErrMsg(data.password);
    }
  };
  return (
    <div className="container shrinked-container pt-10 min-h-[90vh]">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          ref={userRef}
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          ref={userRef}
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          ref={userRef}
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      {errMsg && <span className="text-sm text-red-500">{errMsg}</span>}
    </div>
  );
};

export default SignUp;
