import React from "react";
import logo from '../commonComponents/assets/logo.svg'
import locationlogo from './assets/locationlogo.svg'
import searchlogo from './assets/search.svg'
import breadlogo from './assets/breadlogo.svg'
import paddylogo from './assets/paddylogo.svg'
import dropdownarrow from './assets/dropdownarrow.svg'
import img1 from './assets/img1.svg'
import img2 from './assets/img2.svg'
import img3 from './assets/img3.svg'
import img4 from './assets/img4.svg'
import img5 from './assets/img5.svg'
import img6 from './assets/img6.svg'
import img7 from './assets/img7.svg'
import img8 from './assets/img8.svg'
import img9 from './assets/img9.svg'
import img10 from './assets/img10.svg'
import starlogo from './assets/starlogo.svg'
import veglogo from './assets/veglogo.svg';
import nonveglogo from './assets/nonveglogo.svg';
import './guest.css'
import Footer from "../commonComponents/footer/footer";

const Guest = () => {


    const userDetails = [

        {
            image: img1,
            name: "Eleanor Pena",
            type: "South Indian, Chinese",
            address: "2715 Ash Dr. San Jose, South Dakota 83475",
            rating: 4.8

        },
        {
            image: img2,
            name: "Eleanor Pena",
            type: "cuisine",
            address: "2715 Ash Dr. San Jose, South Dakota 83475",
            rating: 4.8

        },
        {
            image: img3,
            name: "Ralph Edwards",
            type: "cuisine",
            address: "2715 Ash Dr. San Jose, South Dakota 83475",
            rating: 4.8

        },
        {
            image: img4,
            name: "Guy Hawkins",
            type: "cuisine",
            address: "2715 Ash Dr. San Jose, South Dakota 83475",
            rating: 4.8

        },
        {
            image: img5,
            name: "Eleanor Pena",
            type: "cuisine",
            address: "2715 Ash Dr. San Jose, South Dakota 83475",
            rating: 4.8

        },
        {
            image: img6,
            name: "Leslie Alexander",
            type: "cuisine",
            address: "2715 Ash Dr. San Jose, South Dakota 83475",
            rating: 4.8

        },
        {
            image: img7,
            name: "Floyd Miles",
            type: "cuisine",
            address: "2715 Ash Dr. San Jose, South Dakota 83475",
            rating: 4.8

        },
        {
            image: img8,
            name: "Cody Fisher",
            type: "cuisine",
            address: "2715 Ash Dr. San Jose, South Dakota 83475",
            rating: 4.8

        },
        {
            image: img9,
            name: "Courtney Henry",
            type: "cuisine",
            address: "2715 Ash Dr. San Jose, South Dakota 83475",
            rating: 4.8

        },
        {
            image: img10,
            name: "Wade Warren",
            type: "cuisine",
            address: "2715 Ash Dr. San Jose, South Dakota 83475",
            rating: 3.8

        }

    ]


    return (
        <>
            <div className="header_container">
                <div className="header-logo">
                    <img alt="img" src={logo}></img>
                </div>
                <div className="location-logo">
                    <div><img alt="img" src={locationlogo}></img></div>
                    <div><span className="location_text">Chennai</span></div>
                </div>
                <div className="searchbar"><img alt="img" className="searchlogo" src={searchlogo}></img><input placeholder="search"></input></div>
                <div className="buttons-container">
                    <button className="chef_btn" onClick={() => console.log("chef clicked")}>I am a chef </button>
                    <button className="chef_btn" onClick={() => console.log(" customer clicked")}>I am a customer </button>
                </div>
            </div>
            <div className="gustUsers_container">
                <div className="inner_container">
                    <div className="paddyimg_container">
                        <img alt="img" src={paddylogo}></img>
                    </div>
                    <div className="gustuserdetails_container">
                        <div class="rail-select">
                            <div class="select-side">
                                <img alt="img" src={dropdownarrow}></img>
                            </div>
                            <select class="form-control" id="sel1">
                                <option>Cuisine 1</option>
                                <option>Cuisine 2</option>
                                <option>Cuisine 3</option>
                                <option>Cuisine 4</option>
                            </select>
                        </div>
                        <div className="usercards">
                            {userDetails && userDetails.map((data) => (
                                <div className="usercard-container">
                                    <div><img alt="img" src={data.image}></img></div>
                                    <div>
                                        <div className="user_name_container"><div className="user_name_text">{data.name}</div><div><img alt="img" src={starlogo}></img><span className="user_rating_text">{data.rating}</span></div> </div>

                                        <div className=" user_name_text user_type_text"> {data.type}</div>
                                        <div className="user_address_text">{data.address}</div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="breadimg_container">
                        <div className="bread_img"> <img alt="img" src={breadlogo}></img></div>
                        <div className="food_type_container">
                            <div>
                                <img alt="img" src={veglogo}></img>
                                <span className="food_type_text">VEG</span>
                            </div>
                            <div>
                                <img alt="img" src={nonveglogo}></img>
                                <span className="food_type_text">NON-VEG</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="footer_container">
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default Guest