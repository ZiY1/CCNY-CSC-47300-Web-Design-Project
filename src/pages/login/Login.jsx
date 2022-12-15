import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

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
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
