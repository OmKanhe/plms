import React, { useState, useEffect } from "react";
import logo from "../assets/landing-apge-logo.png";
import { Link, useNavigate } from "react-router-dom";
import Selector from "./Selector";
import { Country, State, City } from "country-state-city";
import axios from "axios";
import { toast } from "react-hot-toast";

function CompleteProfile() {
  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();

  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [district, setDistrict] = useState();
  const [pincode, setPincode] = useState();
  const [landmark, setLandmark] = useState();
  const [address, setAddress] = useState();

  const owner = JSON.parse(localStorage.getItem("owner"));
  // console.log("from first", owner.email);

  useEffect(() => {
    setStateData(State.getStatesOfCountry(country?.isoCode));
  }, [country]);

  useEffect(() => {
    setCityData(City.getCitiesOfState(country?.isoCode, state?.isoCode));
  }, [state]);

  useEffect(() => {
    stateData && setState(stateData[0]);
  }, [stateData]);

  useEffect(() => {
    cityData && setCity(cityData[0]);
  }, [cityData]);

  const navigate = useNavigate();

  const handleCompleteProfile = async (e) => {
    e.preventDefault();
    let profileData = {
      email: owner.email,
      address,
      landmark,
      city: city.name,
      district,
      state: state.name,
      country: country.name,
      pincode,
    };
    try {
      const response = await axios.post("/lab_profile", profileData);
      const data = response.data;
      console.log(data);
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Lab profile created successfully");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Error ", error);
    }
    console.log(profileData);
  };

  return (
    <>
    {!owner ? (
    <div className="sm:min-h-screen bg-[#337357] text-white">
    <h1 className="text-4xl font-bold text-center pt-96">Please register your lab first</h1>
    </div>
  ) : 
      <div>
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


      <section className="sm:min-h-screen flex flex-col items-center">
        <img
          src={logo}
          className="sm:min-w-4 sm:p-3 p-3"
          alt=""
          style={{ width: "145px", height: "95px" }}
        />

        <div className="sm:min-w-screen sm:min-h-4 sm:h-1 bg-[FEFBF6]  sm:mb-12 flex justify-center align-middle"></div>
        {/* <!-- login container --> */}

        <h2 className="font-semibold text-3xl text-[#007F73] sm:grid-cols-none">
          Welcome, <span className="text-3xl font-bold">{owner.lab_name}</span>
        </h2>
        <p className="text-lg font-medium mt-4 text-[#114232] sm:grid-cols-none">
          License Number :{" "}
          <span className="text-[#007F73] font-bold">{owner.lab_license}</span>
        </p>
        <p className=" mt-8 text-s text-[#193f2e] text-center sm:grid-cols-none">
          Please complete your profile, you can change details later in settings
          page. <br />
          <span className="text-sm">
            All fields are mandatory{" "}
            <span className="text-lg mt-3 text-red-600">*</span>
          </span>
        </p>
        <div className="bg-slate-50 rounded-2xl shadow-lg sm:mt-14 sm:p-5 sm:px-8 items-center">
          {/* LABORATORY DETIALS */}

          <p className="text-lg font-bold mt-4 mb-6 sm:px-5 text-[#193f2e] ">
            Laboratory Details
          </p>
          <div
            action=""
            className="sm:grid sm:grid-cols-3 sm:p-4 sm:gap-x-[200px]"
          >
            <div className="">
              <p className="text-slate-700 sm:ml-1 font-semibold">Lab Name</p>
              <input
                className="sm:p-2  sm:pl-3 sm:pr-[150px] sm:mt-4 sm:rounded-xl border font-normal text-gray-500"
                type="text"
                name="email"
                placeholder="Lab Name"
                disabled
                value={owner.lab_name}
              />
            </div>

            <div className="">
              <p className="text-slate-700 sm:ml-1 font-semibold">
                License Number
              </p>
              <input
                className="sm:p-2  sm:pl-3 sm:pr-[150px] sm:mt-4 sm:rounded-xl border font-normal text-gray-500"
                type="text"
                name="email"
                placeholder="CF34GBJC8"
                disabled
                value={owner.lab_license}
              />
            </div>
            {/* <!-- form --> */}
          </div>

          {/* OWNER DETAILS */}
          <p className="text-lg font-bold mt-12 mb-6 sm:px-5 text-[#193f2e] ">
            Owner Personal Details
          </p>
          <div
            action=""
            className="sm:grid sm:grid-cols-3 sm:p-4 sm:gap-x-[200px]"
          >
            <div className="">
              <p className="text-slate-700 sm:ml-1 font-semibold">Owner Name</p>
              <input
                className="sm:p-2  sm:pl-3 sm:pr-[150px] sm:mt-4 sm:rounded-xl border  font-normal text-gray-500"
                type="text"
                name="email"
                placeholder="Owner Name"
                disabled
                value={owner.fullname}
                // onChange={(e) => setValues({...values, labName : e.target.value})}
              />
            </div>

            <div className="">
              <p className="text-slate-700 sm:ml-1 font-semibold">
                Owner Contact No.
              </p>
              <input
                className="sm:p-2  sm:pl-3 sm:pr-[150px] sm:mt-4 sm:rounded-xl border font-normal text-gray-500"
                type="text"
                name="email"
                placeholder="9876753944"
                disabled
                value={owner.contact_no}
                // onChange={(e) => setValues({...values, labName : e.target.value})}
              />
            </div>

            <div className="">
              <p className="text-slate-700 sm:ml-1 font-semibold">
                Owner email address
              </p>
              <input
                className="sm:p-2  sm:pl-3 sm:pr-[150px] sm:mt-4 sm:rounded-xl border font-normal text-gray-500"
                type="text"
                name="email"
                placeholder="o@example.com"
                disabled
                value={owner.email}
                // onChange={(e) => setValues({...values, labName : e.target.value})}
              />
            </div>
            {/* <!-- form --> */}
          </div>

          {/* LOCATION DETAILS */}

          <p className="text-lg font-bold mt-12 mb-6 sm:px-5 text-[#193f2e] ">
            Location Details
          </p>
          <form
            onSubmit={handleCompleteProfile}
            className="sm:grid sm:grid-cols-3 sm:p-4 sm:gap-x-[200px] relative"
          >
            <div className="sm:px-1 ">
              <p className="text-slate-700 font-semibold">Country :</p>
              <Selector
                data={countryData}
                selected={country}
                setSelected={setCountry}
              />
            </div>

            <div className="sm:px-1 ">
              <p className="text-slate-700 font-semibold">State :</p>
              {state && (
                <Selector
                  data={stateData}
                  selected={state}
                  setSelected={setState}
                />
              )}
            </div>

            <div className="sm:px-1 ">
              <p className="text-slate-700 font-semibold">City :</p>
              {city && (
                <Selector
                  data={cityData}
                  selected={city}
                  setSelected={setCity}
                />
              )}
            </div>

            <div className="sm:mt-16 ">
              <p className="text-slate-700 sm:ml-1 font-semibold">District :</p>
              <input
                className="sm:p-2  sm:pl-3 sm:mt-4 sm:rounded-xl border  placeholder:font-normal placeholder:text-gray-500"
                type="text"
                name="district"
                placeholder="District Name"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>

            <div className="sm:mt-16 ">
              <p className="text-slate-700 sm:ml-1 font-semibold">Pincode :</p>
              <input
                className="sm:p-2  sm:pl-4 sm:mt-8 sm:rounded-xl border  placeholder:font-normal placeholder:text-gray-500"
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>

            <div className="sm:mt-16 ">
              <p className="text-slate-700 sm:ml-1 font-semibold">Landmark :</p>
              <input
                className="sm:p-2  sm:pl-4 sm:mt-8 sm:rounded-xl border  placeholder:font-normal placeholder:text-gray-500"
                type="text"
                name="landmark"
                placeholder="Landmark"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />
            </div>

            <div className="sm:mt-16">
              <p className="text-slate-700 sm:ml-1 font-semibold">Address :</p>
              <input
                className="sm:p-2  sm:pl-3 sm:pr-[150px] sm:mt-4 sm:rounded-xl border font-normal text-gray-500"
                type="textarea"
                name="address"
                placeholder="Your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <button
                type="submit"
                className="bg-[#337357] text-center rounded-xl text-white py-2 hover:scale-105 duration-300"
                style={{ width: "120px", height: "42px" }}
              >
                Submit
              </button>
            </div>
            {/* <!-- form --> */}
          </form>
        </div>
      </section>
      </div>
        }
    </>
  );
}
export default CompleteProfile;

{
  /* <div className="sm:grid sm:grid-cols-2 sm:gap-[120px] bg-slate-50 rounded-2xl shadow-lg max-w-5xl p-5 items-center"> */
}
{
  /* <img src="/src/assets/landing-apge-logo.png" class="sm:min-w-2 sm:p-3 p-3" alt="" style="
    width: 47px;
    height: 47px;
"></img> */
}
