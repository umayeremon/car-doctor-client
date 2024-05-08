/* eslint-disable react/no-unescaped-entities */
import { FcGoogle } from "react-icons/fc";
import loginImg from '../../assets/images/login/login.svg'
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='min-h-[calc(100vh-328px)] border rounded-xl flex items-center justify-center'>
      <div className="flex flex-col gap-48 items-center justify-center lg:flex-row">
        <div className="text-center w-1/3 lg:text-left">
         <img src={loginImg} alt="" />
        </div>
        <div className="card  w-2/3 max-w-md p-8 rounded-md  border border-dotted border-gray-400">
          <form className="card-body">
            <h1 className='text-center font-bold text-[#444444] text-3xl'>Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-error text-white">Login</button>
            </div>
          </form>
          <div>
            <h2 className='text-[#444444] font-semibold text-md text-center'>Or Sign In with</h2>
            <div className="flex gap-4 justify-center items-center my-2">
              <button className="btn "> <FaFacebookF className="text-xl"/> </button>
              <button className="btn "> <FaGithub className="text-xl"/></button>
              <button className="btn "> <FcGoogle className="text-xl"/> </button>
            </div>
            <div className="text-center my-2">
              <h3 className="text-sm text-[#444444]">Don't have an account? <Link to='signUp' className="text-[#FF3811] font-medium">Sign Up</Link> </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
