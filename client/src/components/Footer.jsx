import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-[#337357] text-white p-20 mt-5">
        <div className="grid grid-cols-6 justify-center align-middle gap-5 ">
          <div className="col-span-2 ml-20">
            <h2 className="text-3xl font-bold tracking-widest mt-10 ">
              PATHOCARE
            </h2>
            <p className="mt-5 text-justify">
              Welcome to PATHOCARE, your trusted partner in
              <br /> health diagnostics. Our state-of-the-art laboratory
              <br /> is committed to providing accurate and reliable
              <br /> results for all your testing needs. With a team
              <br /> of experienced professionals and cutting-edge
              <br /> technology, we offer a comprehensive range of
              <br /> diagnostic services,including blood tests, urine
              <br /> analysis, imaging, and more.
            </p>
          </div>

          <div className="col-span-1 ml-6 ">
            <h2 className="font-bold tracking-widest mt-8">Quick Links</h2>
            <ol className="mt-5 space-y-5 ">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Services</Link>
              </li>
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="contact-us">Contact us</Link>
              </li>
            </ol>
          </div>

          <div className=" col-span-1">
            <h2 className="font-bold tracking-widest mt-8">Our Resources</h2>
            <ol className="mt-5 space-y-5">
              <li>Manage patients</li>
              <li>Report</li>
              <li>Tests</li>
            </ol>
          </div>

          <div className=" col-span-2">
            <h2 className="font-bold tracking-widest mt-8">Get in Touch</h2>
            <ol className="mt-5 space-y-6">
              <li className="">
                Address
                <div className="flex items-center mr-10 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p className="ml-3">
                    84,Pandurang Gawande Layout,Khamla Nagpur(IN)
                  </p>
                </div>
              </li>

              <li>
                Phone
                <div className="flex items-center mr-10 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="ml-3">+91 (954)540-0369 </p>
                </div>
                <div className="flex items-center mr-10 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="ml-3">+91 (770)929-1565</p>
                </div>
              </li>

              <li>
                Email
                <div className="flex items-center mr-10 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                    <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                  </svg>

                  <p className="ml-3">
                    <Link to="contact-us">contact@clustorcomputing.com</Link>
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
