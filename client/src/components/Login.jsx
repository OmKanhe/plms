/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/landing-apge-logo.png";
import login from "../assets/login.png";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const {loading, error} = useSelector((state) => state.user)

  const handleClcik = () => {
    setShowPass(!showPass);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let loginCredentials = {
      email,
      password,
    };
    try {
      const result = await dispatch(loginUser(loginCredentials));
      console.log("result :", result);
      // if (result.meta.requestStatus === "fulfilled") {
      //   console.log("payload", result.payload);
      //   setEmail("");
      //   setPassword("");
      //   setShowPass("");
      //   console.log("data set to null");
      //   navigate("/dashboard");
      // } else {
      //   console.log("Login unsuccessful");
      //   // Handle unsuccessful login here (e.g., display error message)
      // }
      if(!result.payload.error){
        setEmail("");
        setPassword("");
        setShowPass("");
        console.log("data set to null");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Error while logging ", error);
      // Handle error here (e.g., display error message)
    }
    
  };
  return (
    <>
      <div className="sm:block hidden">
        <div
          className="absolute w-20 h-20 rounded-full bg-green-500 blur-3xl -z-50"
          style={{ top: "10%", left: "50%" }}
        ></div>
        <div
          className="absolute w-20 h-20 rounded-full bg-green-500 blur-3xl -z-50"
          style={{ top: "5%", left: "2%" }}
        ></div>
        <div
          className="absolute w-20 h-20 rounded-full bg-green-500 blur-3xl -z-50"
          style={{ top: "-5%", left: "85%" }}
        ></div>
        <div
          className="absolute w-24 h-24 rounded-full bg-green-500 blur-3xl -z-50"
          style={{ top: "75%", left: "12%" }}
        ></div>

        <div
          className="absolute w-24 h-24 rounded-full bg-green-500 blur-3xl -z-50 "
          style={{ top: "85%", left: "65%" }}
        ></div>
        <div
          className="absolute w-20 h-20 rounded-full bg-green-500 blur-3xl -z-50"
          style={{ bottom: "40%", right: "1%" }}
        ></div>
      </div>
      <section className="bg-grey-100 min-h-screen flex flex-col items-center justify-center">
        <div className="sm:min-w-screen sm:min-h-8 h-20 bg-[FEFBF6] sm:mt-[-100px] sm:mb-24 flex justify-center align-middle">
          <img
            src={logo}
            className="sm:min-w-7 sm:p-3 p-3"
            style={{ height: "90px" }}
            alt=""
          />
        </div>
        <div className="bg-gray-50 flex rounded-2xl shadow-lg max-w-5xl p-5">
          <div className="md:w-1/2 px-16">
            <h2 className="font-bold text-2xl text-[#007F73] tracking-wide">
              LOGIN
            </h2>
            <p className="text-sm mt-4">
              If you already a member, easily login
            </p>

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                className="p-2 pl-4 mt-8 rounded-xl border"
                type="text"
                name="email"
                placeholder="Owner Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <div class="relative">
                <input
                  type={showPass ? "text" : "password"}
                  className="p-2 pl-4 rounded-xl border w-full"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {showPass ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    viewBox="0 0 16 16"
                    onClick={handleClcik}
                    // type={showPass ? "password" : "text"}
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye-slash absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
                    viewBox="0 0 16 16"
                    onClick={handleClcik}
                  >
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                  </svg>
                )}
              </div>
              <button
                type="submit"
                className="bg-[#337357] rounded-xl text-center text-white py-2 hover:scale-105 duration-300"
              >
                Login
              </button>
            </form>

            <div className="mt-10 grid grid-cols-3 items-center"></div>
            <Link className="mt-5 text-xs border-b border-b-gray-400 py-6 underline hover:cursor-pointer">
              Forgot your password?
            </Link>

            <div className="my-5 text-s flex justify-between items-center">
              <p>If you don't have an account..</p>
              <Link
                to="/register"
                className="py-2 px-4 bg-[#337357] text-white border rounded-xl hover:scale-110 duration-300"
              >
                Register
              </Link>
            </div>
          </div>

          <div className="md:block hidden w-1/2 bg-[] rounded-lg">
            <img src={login} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
