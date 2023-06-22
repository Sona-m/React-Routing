import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const { value } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "sonam" && password === "sonam123") {
      setIsAuth(true);
      value(true);
      navigate("/dropdown");
    } else {
      navigate("/");
      value(false);
    }
  };

  return (
    <div className="p-8  w-1/2  bg-blue-400  ml-auto flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit}>
        <h1 className="text-2xl text-center text-white font-bold mb-10">
          Login here!!
        </h1>
        <input
          className="block rounded border-0 px-3.5 py-2 my-4 text-gray-900 shadow placeholder:text-gray-400"
          type="text"
          name="Email"
          placeholder="Your Username"
          autoComplete="off"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="block rounded border-0 px-3.5 py-2 mb-10 text-gray-900 shadow placeholder:text-gray-400"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="bg-white text-blue-400 rounded w-full px-2 py-1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
