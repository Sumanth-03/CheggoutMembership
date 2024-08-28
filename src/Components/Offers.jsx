import React from "react";

import Aha from '../Assets/Aha.svg'
import Hotstar from '../Assets/Hotstar.svg'
import OttPlay from '../Assets/Ott-play.svg'
import Prime from '../Assets/Prime.svg'

import LifeStyle from '../Assets/LifeStyle.svg'
import Decathlon from '../Assets/Decathlon.svg'
import Levis from '../Assets/Levis.svg'
import AX from '../Assets/AX.svg'

import Puma from '../Assets/Puma.svg'
import Myntra from '../Assets/myntra.svg'
import Ajio from '../Assets/Ajio.svg'
import Swiggy from '../Assets/Swiggy.svg'

import img1 from '../Assets/1.svg'
import img2 from '../Assets/2.svg'
import img3 from '../Assets/3.svg'
import img4 from '../Assets/4.svg'

const subscriptionsItems = [
    Aha,
    Hotstar,
    OttPlay,
    Prime,
]
const offersItems = [
    LifeStyle,
    Decathlon,
    Levis,
    AX,
]

const DiscountItems = [
    Puma,
    Myntra,
    Ajio,
    Swiggy,
]
const CheggoutItems = [
    img1,
    img2,
    img3,
    img4,
]

function Scrollbar ({headding,items}){
    return(
        <div className="flex flex-col p-2">
            <h1 className="text-white text-lg p-2 xs:pl-10 sm:pl-20">{headding}</h1>
            <div className="flex flex-row gap-2 overflow-auto justify-center">
            {items.map((item)=>{
                return <img src={item} alt='offer-item' className="w-12"></img>
            })}
            <div className="flex items-center justify-center p-2 text-center font-medium" style={{color:'#8A9AB0'}}>& <br/>more</div>
            </div>
        </div>
    )
}



function Offers (){
    return(
        <div className="h-[50%] overflow-auto pb-8 sm:pb-4">
            <Scrollbar headding='Free Premium Subscriptions' items={subscriptionsItems}></Scrollbar>
            <Scrollbar headding='Offers on Brand Gift Cards' items={offersItems}></Scrollbar>
            <Scrollbar headding='Deals & Discount Coupons for Top Brands' items={DiscountItems}></Scrollbar>
            <Scrollbar headding='Assured Benefits on Cheggout' items={CheggoutItems}></Scrollbar>
        </div>
    )
}
export default Offers