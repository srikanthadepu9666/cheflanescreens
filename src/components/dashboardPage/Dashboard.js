import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselSecond from "react-elastic-carousel";
import Header from "../commonComponents/header/header";
import imag5 from './assets/imag5.svg'
import './dashboard.css'
import searchlogo from '../guestPage/assets/search.svg';
import locationpinlogo from './assets/locationpinlogo.svg'
import Footer from '../commonComponents/footer/footer'
import cheflogo from './assets/cheflogo.svg'
import foodlogo from './assets/foodlogo.svg'
import orderlogo from './assets/orderlogo.svg'
import cubelogo from './assets/cubelogo.svg'
import veglogo from '../guestPage/assets/veglogo.svg';
import nonveglogo from '../guestPage/assets/nonveglogo.svg';
const Dashboard = () => {

    const topCarouselData = [
        {
            image: imag5,
            heading: "The Chef Lane",
            title: "Home-cooked food for every mood",
            subtitle: "Explore Homemade delicacies"
        },
        {
            image: imag5,
            heading: "The Chef Lane",
            title: "Home-cooked food for every mood",
            subtitle: "Explore Homemade delicacies"
        },
        {
            image: imag5,
            heading: "The Chef Lane",
            title: "Home-cooked food for every mood",
            subtitle: "Explore Homemade delicacies"
        }, {
            image: imag5,
            heading: "The Chef Lane",
            title: "Home-cooked food for every mood",
            subtitle: "Explore Homemade delicacies"
        }

    ]
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 2 },
        { width: 1150, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 2 },
        { width: 1750, itemsToShow: 2 }
    ];
    return (
        <>

            <Header />
            <div className="carousel-wrapper">
                <Carousel showArrows={false} showStatus={false} showThumbs={false}>

                    {topCarouselData && topCarouselData.map((data) => (
                        <div >
                            <img alt="img" src={imag5} />
                            <div className="courosaol_text_container">
                                <div className="heading_container"> <span className="heading_text">{data.heading}</span>
                                    <span className="title_text">{data.title}
                                    </span>
                                    <span className="subtitle_text">{data.subtitle}</span></div>

                                <div className="searchbar_container">
                                    <div className="search_logo">
                                        <img alt="img" className="searchlogo_size" src={searchlogo}></img>
                                    </div>
                                    <div>
                                        <input className="dasboard_input" placeholder="Find your chef by location..."></input>
                                    </div>
                                    <div className="findbtn">
                                        <div className="locationlogo" ><img alt="img" src={locationpinlogo}></img></div>
                                        <button className="find_btn_txt">Find Chef</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
                <div className="getstarted_container">

                    <div className="icons_section">
                        <div><span className="getstarted_text">Let’s Get Started</span></div>
                        <div className="logotext_container">
                            <div className="chef"><img alt="img" src={cheflogo}></img><div className="chef_text_container"><span className="heading_chef_text">Find chefs across locations</span><span className="sub_title_text">We have home chefs with professional training and passionate home chefs with years of experience filling happy bellies</span></div></div>
                            <div className="chef"><img alt="img" src={foodlogo}></img><div className="chef_text_container"><span className="heading_chef_text">Find Your Food</span><span className="sub_title_text">What are you in the mood for today? North-Indian or South-Indian, Chinese or Continental, Mexican or Tibetan? A cosy meal for 2 or a feast for many? Want your food ASAP or over the weekend? We have it all!</span></div></div>
                            <div className="chef"><img alt="img" src={orderlogo}></img><div className="chef_text_container"><span className="heading_chef_text">Place Your Order </span><span className="sub_title_text">Contact your chosen chef directly or order ontheir webpage and have homemade delicacies delivered in a jiffy</span></div></div>
                        </div>
                    </div>
                    <div className="try_chef_lane_container">
                        <div className="try_chef_text_container"><span className="try_chef_lane_text">Why try The Chef Lane?</span></div>
                        <div>
                            <div className="cube_container_text"><img alt="img" src={cubelogo}></img><span className="cube_text">Because home food is soul food!</span></div>
                            <div className="cube_container_text"><img alt="img" src={cubelogo}></img><span className="cube_text">All our home chefs are registered with the FSSAI(Food Safety and Standards Authority of India)</span></div>
                            <div className="cube_container_text"><img alt="img" src={cubelogo}></img><span className="cube_text"># vocalforlocal</span></div>
                            <div className="cube_container_text"><img alt="img" src={cubelogo}></img><span className="cube_text">Home Chefs bring a tried and tested repertoire of home-cooked delicacies from their homes to yours</span></div>
                        </div>
                    </div>
                    <div className="testinominals_container">
                        <div className="try_chef_text_container"><span className="try_chef_lane_text">Testimonials</span></div>
                        <div className="coursol_container_div">
                            <CarouselSecond breakPoints={breakPoints}>


                                {[1, 2, 3, 4, 5, 6, 7, 8].map((courosal) => (
                                    <div className="container">
                                        <div>
                                            <span className="coursol_text">
                                                The Chef Lane is the best for any chef. Lorem ipsum dummy text
                                                lorem ipsum dummy text Lorem ipsum dummy text lorem ipsum dummy
                                                text
                                            </span>
                                        </div>
                                        <div className="circle_container">
                                            <div className="coursol_circle"></div>
                                            <div>
                                                <span className="text_bold">Chef Larry Alexander </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </CarouselSecond>
                        </div>
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
                <Footer />
            </div>

        </>
    )
}

export default Dashboard