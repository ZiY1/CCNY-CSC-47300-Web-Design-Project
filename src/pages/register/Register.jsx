import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  useEffect(()  => {
    document.body.classList.add('login-body');

    return () => {
        document.body.classList.remove('login-body')
    };
  });
  return (
    <div className="register">
       <div className="card row d-flex justify-content-center mt-lg-5 mt-md-3 mt-sm-0">
        <div className="left ">
          <h1>Seek Support</h1>
          <p>
          Families affected by Autism need help and encouragement.
          Join our community to seek support and help autistic children to grow better.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
