import { useEffect } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data)
    login()
    window.location = "/"
  }

  useEffect(()  => {
    document.body.classList.add('login-body');

    return () => {
        document.body.classList.remove('login-body')
    };
  });

  return (
    <div className="login1 d-flex justify-content-center mt-lg-5 mt-md-3 mt-sm-0">
      <div className="card1 row">
        <div className="left col-lg-6 col-md-6 col-sm-12">
          <h1>Seek Support</h1>
          <p>
          Families affected by Autism need help and encouragement.
          Join our community to seek support and help autistic children to grow better.
          </p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right col-lg-6 col-md-6 col-sm-12">
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} >
          <input
              placeholder='Username'
              type="text"
              {...register("username", { required: true})}
            />
            {errors.username && <p>Please enter a username!</p>}
            <input
              placeholder='Password'
              type="password"
              {...register("password", { required: true})}
            />
            {errors.password && <p>Please enter a password!</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
