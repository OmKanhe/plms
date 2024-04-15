import React from "react";
import logo from "../assets/landing-apge-logo.png";
import character from "../assets/character.jpg";
import {Link, useNavigate} from "react-router-dom"
function Landing() {
  return (
    <>
    <div className="sm:overflow-hidden">
      <section className="sm:min-h-screen min-h-screen">
        <div  className="sm:block hidden">
      <div
            className="absolute w-20 h-20 rounded-full bg-green-500 blur-3xl -z-50"
            style={{ top: "25%", left: "30%" }}
          ></div>
          <div
            className="absolute w-20 h-20 rounded-full bg-green-500 blur-3xl -z-50"
            style={{ top: "5%", left: "2%" }}
          ></div>
          <div
            className="absolute w-20 h-20 rounded-full bg-green-500 blur-3xl -z-50"
            style={{ top: "-5%", left: "60%" }}
          ></div>
          <div
            className="absolute w-24 h-24 rounded-full bg-green-500 blur-3xl -z-50"
            style={{ top: "75%", left: "12%" }}
          ></div>

          <div
            className="absolute w-24 h-24 rounded-full bg-green-500 blur-3xl -z-50 sm:overflow-hidden"
            style={{ top: "90%", left: "46.5%" }}
          ></div>
          <div
            className="absolute w-24 h-24 rounded-full bg-green-500 -z-50"
            style={{ top: "70%", left: "70%" }}
          ></div>

          <div
            className="absolute w-20 h-20 rounded-full bg-green-500 blur-3xl -z-50 sm:overflow-hidden"
            style={{ bottom: "-1%", right: "2%" }}
          ></div>
          </div>

      
        {/* LOGO DIV */}
        <div className="grid overflow-hidden">
          <div className="sm:min-w-screen sm:min-h-28 h-24 bg-[FEFBF6]  flex justify-center align-middle">
            <img src={logo} className=" sm:min-w-45 sm:p-3 p-3" alt="" />
          </div>
        </div>

        {/* CHARACTER AND HEADING */}
        <div className="sm:grid sm:grid-cols-2 block sm:my-2 my-[36px]">
          {/* HEADING */}
          <div className="sm:p-0 px-3">
          <div className="sm:min-h-[500px] bg-[FEFBF6] sm:text-left sm:pt-36 sm:pl-9 sm:grid grid-rows-2 ">
            <h1 className="sm:text-5xl sm: sm:text-left tracking-wide  text-3xl text-center">
              Effortless{" "}
              <span className="text-[#007F73] sm:text-6xl sm:tracking-wide font-semibold text-3xl">
                Patient
              </span>{" "}
              Management: Streamlining{" "}
              <span className="text-[#007F73] sm:text-6xl sm:tracking-wide font-semibold text-3xl text-center">
                Pathology
              </span>
              <br />
              Practice for You
            </h1>
            <h3 className="sm:text-4xl tracking-normal sm:text-left text-3xl text-center">
            <br />
              <br />
              Seamlessly Manage{" "}
              <span className="text-[#007F73] tracking-normal font-semibold text-center">
                Patient
              </span>{" "}
              Data with Ease.
            </h3>
          </div>
          </div>

          {/* CHARACTER */}
          <div className="sm:min-h-[100px] bg-[FEFBF6] sm:flex align-middle justify-center hidden">
            <img src={character} className="sm:w-4/5" alt="" />
          </div>
        </div>

        {/* BUTTONS */}
        <div className="sm:flex sm:justify-center align-middle sm:gap-8 text-center justify-space sm:mt-0 mt-[220px]">
          <Link  to="/login" class="bg-[#2ea673] hover:bg-[#337357] sm:text-xl sm:mb-0 mb-[80px] tracking-wide font-medium pb-3 text-white py-2 sm:px-16 rounded-2xl px-14 text-2xl  focus:outline-none focus:shadow-outline">
            Sign In
          </Link>
          <br />
          <br />
          <Link to="/register" class="bg-[#2ea673] hover:bg-[#337357] sm:text-xl tracking-wide font-medium pb-3 text-white py-2 sm:px-14 rounded-2xl px-12 text-2xl focus:outline-none focus:shadow-outline ">
            Sign Up
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}

export default Landing;
