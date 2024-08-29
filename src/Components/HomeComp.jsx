import React from "react";
import Offers from "./Offers";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="bg-primary p-2 w-full sm:w-[480px] m-auto h-full sm:shadow-lg sm:rounded-2xl relative landscape:h-96 landscape:overflow-scroll">
      <ArrowLeftIcon className="h-7 w-7 m-3 bg-gray-700 rounded-full text-white p-1" />
      <header className="text-center p-5">
        <img src={Logo} alt="Logo" className="m-auto"></img>
        <h1 className="text-secondary text-xl font-bold">
          Cheggout Membership
        </h1>
        <p className="text-white font-semibold">
          An Exclusive Membership with benefits upto
        </p>
        <span className="text-secondary text-2xl font-bold">₹75,000</span>
      </header>
      <Offers></Offers>
      <div className="-mx-2 p-2 mb-0 text-center fixed bottom-0 m-auto flex justify-center items-center h-20 bg-primary w-full sm:w-[480px] rounded-b-2xl">
        <Link
          to="/order-summary"
          className="bg-turtiary w-full p-2 rounded-xl text-white max-w-[440px] text-lg font-semibold"
        >
          Join Membership
        </Link>
      </div>
    </main>
  );
}
export default Home;
