import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import "../styles/auth.css";

function AuthPage() {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <div className="container">
      <div className="auth-card">

        {activeForm === "login" ? <LoginForm /> : <RegisterForm />}

       <div className="switch-form">
  {activeForm === "login" ? (
    <p>
      Don't have an account?{" "}
      <span onClick={() => setActiveForm("register")}>
        Register
      </span>
    </p>
  ) : (
    <p>
      Already have an account?{" "}
      <span onClick={() => setActiveForm("login")}>
        Login
      </span>
    </p>
  )}
</div>

      </div>
    </div>
  );
}

export default AuthPage;