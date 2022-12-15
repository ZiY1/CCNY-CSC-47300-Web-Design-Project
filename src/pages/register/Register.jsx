import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registered, setRegistered] = useState(false);

  const isValidEmail = (email) =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const handleEmailValidation = (email) => {
    console.log("ValidateEmail was called with", email);

    const isValid = isValidEmail(email);

    const validityChanged =
      (errors.email && isValid) || (!errors.email && !isValid);
    if (validityChanged) {
      console.log("Fire tracker with", isValid ? "Valid" : "Invalid");
    }

    return isValid;
  };

  const onSubmit = (data) => {
    console.log(data);
    setRegistered(true);
    window.location = "/login";
  };

  useEffect(() => {
    document.body.classList.add("register-body");

    return () => {
      document.body.classList.remove("register-body");
    };
  });
  return (
    <div className="register">
      <div className="card row d-flex justify-content-center mt-lg-5 mt-md-3 mt-sm-0">
        <div className="left ">
          <h1>Seek Support</h1>
          <p>
            Families affected by Autism need help and encouragement. Join our
            community to seek support and help autistic children to grow better.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          {registered && (
            <div class="register-success">Registered Successfully!</div>
          )}
          <h1>Register</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Username"
              type="text"
              {...register("username", {
                required: true,
                maxLength: 10,
                minLength: 4,
              })}
            />
            {errors.username && <p>Username must be 4-10 characters long!</p>}
            <input
              placeholder="Email"
              type="text"
              {...register("email", {
                required: true,
                validate: handleEmailValidation,
              })}
            />
            {errors.email && <p>Please enter a valid email!</p>}
            <input
              placeholder="Password"
              type="password"
              {...register("password", {
                required: true,
                maxLength: 10,
                minLength: 4,
              })}
            />
            {errors.password && <p>Password must be 4-16 characters long!</p>}

            {/* <input
              placeholder=''
              type="text"
              {...register("username", { required: true, maxLength: 10, minLength: 4})}
            />
            {errors.username && <p>Username must be 4-10 characters long!</p>} */}

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
