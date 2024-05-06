/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import image from "../assets/Personal site-amico.png";
import logo from "../assets/landing-apge-logo.png";
import { toast } from "react-hot-toast";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [values, setValues] = useState({
    lab_name: "",
    lab_license: "",
    fullname: "",
    email: "",
    contact_no: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const handleClcik = () => {
    setShowPass(!showPass);
  };

  const handleRegisterOwner = async (e) => {
    e.preventDefault();
    const {
      lab_name,
      lab_license,
      fullname,
      email,
      contact_no,
      password,
    } = values;
    try {
      const response = await axios.post("/register", {
        lab_name,
        lab_license,
        fullname,
        email,
        contact_no,
        password,
      });
      const data = response.data;
      console.log(data);
      if (data.error) {
        toast.error(data.error);
      } else {
        localStorage.setItem("owner", JSON.stringify(values))
        toast.success("Registration successfull!");
        setValues({})
        navigate("/complete-profile");
      }
    } catch (error) {
      console.log("Error while registering ", error);
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

      <section className="sm:min-h-screen flex flex-col items-center justify-center">
        <div className="sm:min-w-screen sm:min-h-4 h-20 bg-[FEFBF6]  sm:mb-12 flex justify-center align-middle">
          <img src={logo} className="sm:min-w-4 sm:p-3 p-3" alt="" />
        </div>
        {/* <!-- login container --> */}
        <div className="flex bg-slate-50 rounded-2xl shadow-lg max-w-5xl p-5 items-center">
          {/* <!-- form --> */}
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-3xl text-[#007F73]">
              Create Account
            </h2>
            <p className="text-s mt-4 text-[#193f2e]">Take the first step!</p>
            <p className="text-xs mt-1 text-[#193f2e]">
              All fields are mandatory{" "}
              <span className="text-red-500 text-s">*</span>
            </p>

            <form
              onSubmit={handleRegisterOwner}
              className="flex flex-col gap-4"
            >
              <input
                className="sm:p-2  sm:pl-4 sm:mt-8 sm:rounded-xl border"
                type="text"
                name="lab_name"
                placeholder="Lab Name"
                value={values.lab_name}
                onChange={(e) =>
                  setValues({ ...values, lab_name: e.target.value })
                }
              />
              <input
                className="sm:p-2 sm:pl-4 sm:mt-2 sm:rounded-xl border"
                type="text"
                name="LicenseNumber"
                placeholder="License Number"
                value={values.lab_license}
                onChange={(e) =>
                  setValues({ ...values, lab_license: e.target.value })
                }
              />
              <input
                className="sm:p-2 sm:pl-4 sm:mt-2 sm:rounded-xl border"
                type="text"
                name="fullname"
                placeholder="Owner Name"
                value={values.fullname}
                onChange={(e) =>
                  setValues({ ...values, fullname: e.target.value })
                }
              />
              <input
                className="sm:p-2 sm:pl-4 sm:mt-2 sm:rounded-xl border"
                type="email"
                name="email"
                placeholder="Owner Email address"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
              />
              <input
                className="sm:p-2 sm:pl-4 sm:mt-2 sm:rounded-xl border"
                type="text"
                name="contact_no"
                placeholder="Owner Contact no."
                value={values.contact_no}
                onChange={(e) =>
                  setValues({ ...values, contact_no: e.target.value })
                }
              />

              <div className="relative">
                <input
                  className="sm:p-2 sm:pl-4 rounded-xl border w-full"
                  type={showPass ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                />
                {showPass ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
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
                    class="bi bi-eye-slash absolute top-1/2 right-3 -translate-y-1/2"
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
                className="bg-[#337357] text-center rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Regsiter
              </button>
            </form>

            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <a className="hover:cursor-pointer hover:underline">
                Forgot your password?
              </a>
            </div>

            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Already have an account?</p>
              <Link
                to="/login"
                className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"
              >
                Login
              </Link>
            </div>
          </div>

          {/* <!-- image --> */}
          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl" src={image} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
