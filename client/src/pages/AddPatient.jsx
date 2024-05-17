import { useState } from "react";
import Navbar from "../components/Navbar";

function AddPatient() {
  const [testDetails, setTestDetails] = useState([
    {
      category: "",
      testName: "",
      amount: "",
      doctorName: "",
      prescription: null,
      paymentMode: "",
    },
  ]);

  const handleInputChange = (index, field, value) => {
    const newTestDetails = [...testDetails];
    newTestDetails[index][field] = value;
    setTestDetails(newTestDetails);
  };

  const isLastSectionFilled = () => {
    const lastTest = testDetails[testDetails.length - 1];
    return (
      lastTest.category &&
      lastTest.testName &&
      lastTest.amount &&
      lastTest.doctorName &&
      lastTest.paymentMode
    );
  };

  const addTest = () => {
    if (isLastSectionFilled()) {
      setTestDetails([
        ...testDetails,
        {
          category: "",
          testName: "",
          amount: "",
          doctorName: "",
          prescription: null,
          paymentMode: "",
        },
      ]);
    } else {
      alert("Please fill in all fields before adding a new test.");
    }
  };

  const removeTest = (index) => {
    if (testDetails.length === 1) {
      // Reset the single test details section
      setTestDetails([
        {
          category: "",
          testName: "",
          amount: "",
          doctorName: "",
          prescription: null,
          paymentMode: "",
        },
      ]);
    } else {
      // Remove the selected test details section
      const newTestDetails = testDetails.filter((_, i) => i !== index);
      setTestDetails(newTestDetails);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-h-auto w-screen bg-green-100">
        <h1 className="font-bold text-3xl mx-20 my-30 text-center pt-12 pb-10">
          Patient Registration Form{" "}
        </h1>
        <section
          className="bg-grey-100 max-h-auto max-w-full flex item-center justify-center pb-10"
          style={{
            "padding-left": "50px",
            "padding-right": "50px",
          }}
        >
          <div className="bg-gray-50 flex rounded-2xl shadow-lg max-w-auto sm:h-full p-20">
            <form action="" className="">
              <p className="text-xl font-semibold">Patients Personal details</p>
              <div className="grid grid-cols-3 gap-[200px] my-9">
                <div>
                  <label for="Patients-full-name">Patients full name</label>
                  <input
                    className="p-2 mt-2 w-80 rounded-xl border border-black block"
                    type="name"
                    placeholder=" full name"
                  ></input>
                </div>

                <div>
                  <label for="patients-mobile-number">
                    {" "}
                    Patients mobile number
                  </label>
                  <input
                    className="p-2 mt-2 w-80 rounded-xl border border-black block"
                    type="number"
                    placeholder="Patients mobile no."
                  ></input>
                </div>

                <div>
                  <label for="patients-alternate-number">
                    {" "}
                    Patients alternate number
                  </label>
                  <input
                    className="p-2 mt-2 w-80 rounded-xl border border-black block"
                    type="number"
                    placeholder="Patients alternate no."
                  ></input>
                </div>

                <div className="my-[-100px]">
                  <label for="patients-whatsapp-number">
                    Patients whatsapp number
                  </label>
                  <input
                    className="p-2 mt-2 w-80 rounded-xl border border-black block"
                    type="number"
                    placeholder="Patients whatsapp no."
                  ></input>
                </div>

                <div className="my-[-100px]">
                  <label for="patients-email-address">
                    Patients email address
                  </label>
                  <input
                    className="p-2 mt-2 w-80 rounded-xl border border-black block"
                    type="text"
                    placeholder="Patients email address."
                  ></input>
                </div>

                <div className="my-[-100px]">
                  <label for="Age">Age</label>
                  <input
                    className="p-2 mt-2 w-50 h-14 rounded-xl border border-black block"
                    type="name"
                    placeholder="Age"
                  ></input>
                </div>

                <div className="my-[-100px]">
                  <label for="Patients-date-of-birth">
                    Patients date of birth
                  </label>
                  <input
                    className="p-2 mt-2 rounded-xl border border-black block"
                    type="date"
                  ></input>
                </div>

                <div className="my-[-100px]">
                  <label for="Gender">Gender</label>
                  <div className="p-2 ">
                    <label for="Male">Male</label>
                    <input
                      className="p-2 mt-2 rounded-xl border border-black ml-3 "
                      type="checkbox"
                      name="male"
                    ></input>
                    <label for="Female" className="ml-10">
                      Female
                    </label>
                    <input
                      className="p-2 mt-2 border-black ml-3 "
                      type="checkbox"
                      name="Female"
                    ></input>
                    <label for="Others" className="ml-10">
                      Others
                    </label>
                    <input
                      className="p-2 mt-2 border-black ml-3"
                      type="checkbox"
                      name="Others"
                    ></input>
                  </div>
                </div>

                <div className="my-[-100px]">
                  <label for="patients-Address">Patients address</label>
                  <input
                    className="p-7 mt-2 w-80 rounded-xl border border-black block"
                    type="text"
                    placeholder="Patients address."
                  ></input>
                </div>
              </div>
              <hr className="h-5 border-gray-400 "></hr>
              <p className=" text-xl font-semibold">Test Details</p>
              {testDetails.map((test, index) => (
                <section
                  key={index}
                  className="bg-gray-100 mt-5 p-2 pl-10 justify-center space-y-5 rounded-xl shadow-lg "
                  style={{ "margin-bottom": "10px" }}
                >
                  <div className="grid grid-cols-3 gap-[200px] my-32">
                    <div className="my-[-90px] space-x-4">
                      <label for="patient-test">Test Category:</label>
                      <select
                        name="category"
                        id="category"
                        value={test.category}
                        onChange={(e) =>
                          handleInputChange(index, "category", e.target.value)
                        }
                      >
                        <option value="blood test">Blood test</option>
                        <option value="sugar test"> Sugar test</option>
                        <option value="blood pressure">Blood pressure</option>
                      </select>
                    </div>

                    <div className="my-[-90px] space-x-4">
                      <label for="patient-test">Test Name:</label>
                      <select
                        name="tests"
                        id="tests"
                        value={test.testName}
                        onChange={(e) =>
                          handleInputChange(index, "testName", e.target.value)
                        }
                      >
                        <option value="blood test">Blood test</option>
                        <option value="sugar test"> Sugar test</option>
                        <option value="blood pressure">Blood pressure</option>
                      </select>
                    </div>

                    <div className="my-[-105px] space-x-4">
                      <label for="amount">Amount: </label>
                      <input
                        className="p-2 mt-2 w-24 rounded-xl border border-black"
                        type="number"
                        placeholder="in Rs/-"
                        value={test.amount}
                        onChange={(e) =>
                          handleInputChange(index, "amount", e.target.value)
                        }
                      ></input>
                    </div>

                    <div className="my-[-145px]">
                      <label for="doctors-name">Doctors Name</label>
                      <input
                        className="p-2 mt-2 w-80 rounded-xl border border-black block"
                        type="name"
                        placeholder="Doctors name"
                        value={test.doctorName}
                        onChange={(e) =>
                          handleInputChange(index, "doctorName", e.target.value)
                        }
                      ></input>
                    </div>

                    <div className="my-[-145px]">
                      <label for="upload-prescription">
                        Upload prescription
                      </label>
                      <input
                        className="p-2 mt-2 border-black ml-3"
                        style={{
                          "border-top-width": "1px",
                          "border-bottom-width": "1px",
                          "border-right-width": "1px",
                          "border-left-width": "1px",
                          borderRadius: "8px",
                        }}
                        type="file"
                        name="upload"
                        onChange={(e) =>
                          handleInputChange(
                            index,
                            "prescription",
                            e.target.files[0]
                          )
                        }
                      ></input>
                    </div>

                    <div className="my-[-120px] space-x-4">
                      <label for="Payment-mode">Payment mode:</label>
                      <select
                      name="payment"
                      id="payment"
                      value={test.paymentMode}
                      onChange={(e) =>
                        handleInputChange(index, "paymentMode", e.target.value)
                      }
                      >
                        <option value="cash">Cash</option>
                        <option value="UPI"> UPI</option>
                        <option value="card">Card</option>
                        <option value="online banking">Online Banking</option>
                        <option value="cheque">Cheque</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-[200px] my-40">
                    <div className="my-[-115px] space-x-4">
                      <label for="amount">Total Test cost</label>
                      <input
                        className="p-2 mt-2 w-20 rounded-xl border border-black"
                        type="number"
                        placeholder=""
                        value={test.amount}
                        onChange={(e) =>
                          handleInputChange(index, "amount", e.target.value)
                        }
                      ></input>
                    </div>

                    <div className="my-[-115px] space-x-2">
                      <button
                        className="p-3 mt-2 w-30 bg-[#E72929] text-white border rounded-xl hover:scale-110 duration-300"
                        type="button"
                        onClick={() => removeTest(index)}
                      >
                        Remove Test
                      </button>
                    </div>
                  </div>
                </section>
              ))}

              <button
                className="flex items-center bg-[#337357] text-white font-bold py-3 pl-4 px-10 rounded-xl border hover:scale-110 duration-300 text-center"
                type="button"
                onClick={addTest}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                  />
                </svg>
                Add Test
              </button>

              <div className="mt-10 flex justify-center space-x-6">
                <button className=" px-8 p-3 w-30 bg-[#337357] text-white border rounded-xl hover:scale-110 duration-300">
                  Save
                </button>
                <button className=" px-7 p-3 w-30 bg-[#E72929] text-white border rounded-xl hover:scale-110 duration-300 ">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
export default AddPatient;
