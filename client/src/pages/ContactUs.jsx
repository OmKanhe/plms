import React from "react";
import contactUs from "../../src/assets/contactUs.svg";
import Navbar from "../components/Navbar";

// 02cef9eb-79fe-402a-a835-fe97168d3907

function ContactUs() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "02cef9eb-79fe-402a-a835-fe97168d3907");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setResult("");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="sm:block hidden">
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
          style={{ top: "85%", left: "46.5%" }}
        ></div>
        <div
          className="absolute w-24 h-24 rounded-full bg-green-500 blur-3xl -z-50"
          style={{ top: "70%", left: "70%" }}
        ></div>

        <div
          className="absolute w-20 h-20 rounded-full bg-green-500 blur-3xl -z-50 sm:overflow-hidden"
          style={{ bottom: "0%", right: "2%" }}
        ></div>
      </div>
      <Navbar />

      <div className="flex flex-row justify-center align-middle">
        <div className="w-1/2">
          {/* <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name='name'
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name='email'
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            name='message'
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
      <span>{result}</span> */}
          {/* Heading Line */}
          <div className="mt-[60px] ml-28">
            <h2 className="text-5xl font-bold text-[#265641]">
              We're here for you
            </h2>
            <p className="mt-8 text-lg font-medium">
              Experience lightning-fast issue resolution and seamless customer
              support with our dedicated team, ensuring swift solutions to your
              queries and concerns.
            </p>
            {/* Contact us form */}
            <form onSubmit={onSubmit} className="mt-12">
              <h3 className="text-3xl font-bold text-[#265641]">Contact Us</h3>
              <div className="mt-4">
                <input
                  className="p-2 pl-4 w-72 mt-8 rounded-xl border border-slate-500 placeholder:text-slate-600"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                ></input>
              </div>
              <div className="mt-4">
                <input
                  className="p-2 pl-4 w-72 mt-8 rounded-xl border border-slate-500 placeholder:text-slate-600"
                  type="text"
                  name="email"
                  placeholder="Your Email"
                ></input>
              </div>
              <div className="mt-4">
                <input
                  className="p-2 pl-4 w-96 h-20 mt-8 rounded-xl border border-slate-500 placeholder:text-slate-600"
                  type="text"
                  name="message"
                  placeholder="Your Message"
                ></input>
              </div>
              {/* <button
                type="submit"
                className="bg-[#337357] p-6 mt-10 rounded-xl text-center text-white py-2 hover:scale-105 duration-300"
              >
                Send Message
              </button> */}
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
              type="submit"
                className="btn bg-[#337357] p-6 mt-10 rounded-xl text-center text-white py-2 hover:scale-105 hover:bg-[#337357] duration-300"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Send Message
              </button>
              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <div className="modal-box">
                  <h3 className="font-bold text-lg">{result}</h3>
                  <p className="py-4 text-lg font-medium">
                   {result? "Your message is on the way..." : "Your message has been sent successfully 😊" }
                  </p>
                  <div className="modal-action">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn bg-[#337357] text-white hover:bg-[#337357]">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </form>
            {/* <span>{result}</span> */}
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={contactUs}
            width={500}
            alt=""
            className="ml-[150px] mt-28"
          />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
