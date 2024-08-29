import React from "react";

import Logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/24/outline";

function Acknowledge() {
  return (
    <main className="bg-primary p-2 w-full sm:w-[480px] m-auto h-full sm:shadow-lg sm:rounded-2xl">
      <header className="text-center p-5">
        <img src={Logo} alt="Logo" className="m-auto"></img>
        <h1 className="text-secondary text-xl font-bold">
          Cheggout Membership
        </h1>
      </header>

      <div className="flex flex-col justify-center items-center h-[30%]">
        <span className="text-white font-semibold p-5">
          Payment of ₹1499 Successful
        </span>
        <div className="bg-green-100 rounded-full p-2 text-center">
          <div className="bg-green-200 rounded-full p-2 text-center">
            <div className="bg-green-400 rounded-full p-2 text-center">
              <CheckIcon className="h-10 w-10 text-white font-bold" />
            </div>
          </div>
        </div>
        <div className="-mx-2 p-2 mb-0 text-center  m-auto flex justify-center items-center h-20 bg-primary w-full sm:w-[480px] rounded-b-2xl">
        <Link
          to="/"
          className="bg-turtiary w-full p-2 rounded-xl text-white max-w-[440px] text-lg font-semibold"
        >
          Go to home
        </Link>
      </div>
      </div>
      
    </main>
  );
}
export default Acknowledge;
