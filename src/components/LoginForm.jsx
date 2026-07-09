import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import {validateLogin,validateLoginField} from "../utils/validation";

function LoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleBlur(e){
    const {name,value} = e.target;
    const error = validateLoginField(name,value,values);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
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
        onBlur={handleBlur}
        error={errors.email}
      />

      <InputField
        label="Password"
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password}
        icon={showPassword ? <FaEyeSlash/> : <FaEye/>}
        onIconClick={() => setShowPassword(!showPassword)}
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