import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import { validateRegister } from "../utils/validation";

function RegisterForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    const validationErrors = validateRegister(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Registration Successful!");
      console.log(values);
    } else {
      setSuccess("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Register</h2>

      <InputField
        label="Name"
        type="text"
        name="name"
        value={values.name}
        placeholder="Enter your name"
        onChange={handleChange}
        error={errors.name}
      />

      <InputField
        label="Email"
        type="email"
        name="email"
        value={values.email}
        placeholder="Enter your email"
        onChange={handleChange}
        error={errors.email}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        value={values.password}
        placeholder="Enter your password"
        onChange={handleChange}
        error={errors.password}
      />

      <InputField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={values.confirmPassword}
        placeholder="Confirm your password"
        onChange={handleChange}
        error={errors.confirmPassword}
      />

      <Button text="Register" type="submit" />

      {success && <p className="success">{success}</p>}
    </form>
  );
}

export default RegisterForm;