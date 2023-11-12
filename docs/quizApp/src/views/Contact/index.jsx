import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiTwotoneMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";

const index = () => {
  const email = "dapious99@gmail.com";
  const phoneNumber = "+2348168212678";
  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${email}?subject=Contact%20Form%20Submission`;
  };

  return (
    <div className="bg-gray-200 h-screen px-10 md:px-5 sm:px-3">
      <p className="text-4xl md:text-2xl sm:text-xl">
        For improvement, contribution and sponsorship. Contact:
      </p>
      <div className="flex gap-12  pt-6">
        <form onSubmit={handleFormSubmit} className="w-1/2 text-white">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="py-2 rounded px-2"
              placeholder="Name"
            />
          </div>

          <div className="flex flex-col gap-1 py-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="py-2 rounded px-2"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea
              rows="5"
              id="message"
              name="message"
              required
              className="py-2 rounded px-2 resize-none"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 rounded-md text-white px-4 py-2 mt-6"
            >
              Send Email
            </button>
          </div>
        </form>
        <div className="flex flex-col pt-14 gap-5 w-1/2 text-white">
          <a
            href="https://api.whatsapp.com/send?phone=2348110792758&text=Good%20day.%0AHow%20can%20we%20help%20you%20today%3F%0AWe%20are%20here%20for%20anything%20frontend%20related%20and%20websites%20creation.%20Kodewarlock%F0%9F%98%8D%F0%9F%98%8D"
            className="flex gap-3 items-center text-xl"
          >
            <IoLogoWhatsapp className="text-green-600" size={32} />
            <p>Whatsapp</p>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex gap-3 items-center text-xl"
          >
            <AiTwotoneMail className="text-blue-600" size={32} />
            <p>Email</p>
          </a>
          <a
            href="https://www.linkedin.com/in/kamalideen-omotosho-a50135270/"
            className="flex gap-3 items-center text-xl"
          >
            <BsLinkedin className="text-blue-900" size={32} />
            <p>LinkedIn</p>
          </a>
          <a
            href={`tel:${phoneNumber}`}
            className="flex gap-3 items-center text-xl"
          >
            <BiSolidPhoneCall className="bg-green-600 text-white" size={32} />
            <p>Phone Call</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
