import React from "react";
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";

function ApplyPromo (){
    return(
        <div className="bg-primary p-2 w-full sm:w-[480px] m-auto h-full sm:shadow-lg sm:rounded-2xl">
            <header className="flex flex-row items-center">
            <span className="text-white font-bold text-lg mx-4">Appply Promocode</span>
            <Link to='/order-summary' className=" ml-auto">
            <XMarkIcon className="h-7 w-7 m-3 bg-gray-700 rounded-full text-white p-1" />
            </Link>
            </header>
            <section className="m-2 p-2 rounded-2xl flex flex-row items-center" style={{backgroundColor:'#384E6D'}}>
            <input placeholder="Enter Promocode" className="text-white bg-transparent py-4 text-xl focus:border-none focus:outline-none"></input>
            <Link to='/verify-promo' className="ml-auto text-lg font-medium p-4" style={{color:'#FF5838'}}>Apply</Link>
            </section>
            <p className="text-white text-lg p-2">No promocode available for you!!</p>
        </div>
    )
}
export default ApplyPromo