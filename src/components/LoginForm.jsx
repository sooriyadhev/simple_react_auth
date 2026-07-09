import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import { validateLogin } from "../utils/validation";

function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateLogin(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Login Successful!");
      console.log(values);
    } else {
      setSuccess("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">

      <h2>Login</h2>

      <InputField
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        error={errors.password}
      />

      <Button
        text="Login"
        type="submit"
      />

      {success && <p className="success">{success}</p>}

    </form>
  );
}

export default LoginForm;