import React from "react";
import { Link } from "react-router-dom";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";

function OrderSummary() {
  return (
    <main className="bg-primary p-2 w-full sm:w-[480px] m-auto h-full sm:shadow-lg sm:rounded-2xl">
      <header className="flex flex-row items-center">
        <Link to="/">
          <ArrowLeftIcon className="h-7 w-7 m-3 bg-gray-700 rounded-full text-white p-1" />
        </Link>
        <span className="text-white font-bold text-lg">Order Summary</span>
      </header>
      <section
        className="relative m-2 p-2 rounded-2xl mb-10"
        style={{ backgroundColor: "#384E6D" }}
      >
        <h1 className="text-white font-semibold text-lg pt-2">
          First Membership
        </h1>
        <p className="text-gray-600 pb-4">
          Get benefits wort{" "}
          <span className="text-white font-semibold text-lg">₹75,000 </span>
        </p>
        <span className="font-extrabold text-white text-2xl absolute top-8 right-2">
          ₹1499
        </span>
        <hr className="text-white" />
        <div className="flex flex-row py-4">
          <p className="text-white font-normal text-lg">Exclusive Cashback</p>
          <Link to="/apply-promocode" className="ml-auto">
            <span className="font-semibold" style={{ color: "#FF5838" }}>
              Apply Promocode
            </span>
          </Link>
        </div>
      </section>
      <Link to="/Activate-plan">
        <span
          className="font-semibold m-2 p-2 py-4"
          style={{ color: "#FF5838" }}
        >
          Have a Gift Voucher?
        </span>
      </Link>
      <div className="mb-2 text-center fixed bottom-0 left-0 right-0 flex justify-center items-center h-20">
        <Link
          to="/Payment-sucess"
          className="bg-turtiary w-full mx-2 p-2 rounded-xl text-white max-w-[440px] text-lg font-semibold"
        >
          Buy Membership
        </Link>
      </div>
    </main>
  );
}
export default OrderSummary;
