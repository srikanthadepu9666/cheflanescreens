import React from "react";
import './userCard.css'

const UserCard = (props) => {

    const { image, name, type, address, reating } = props.userData;

    return (
        <>
            {/* <h2>this is user card</h2> */}
            <div className="usercard-container">
                <div><img src={image} alt="img"></img></div>
                <div>{name}</div>
                <div>{address}</div>
            </div>
            <div className="usercard-container">
                <div><img src={image} alt="img"></img></div>
            </div>
            <div className="usercard-container">
                <div><img src={image} alt="img"></img></div>
            </div>
            <div className="usercard-container">
                <div><img src={image} alt="img"></img></div>
            </div>
            <div className="usercard-container">
                <div><img src={image} alt="img"></img></div>
            </div>
            <div className="usercard-container">
                <div><img src={image} alt="img"></img></div>
            </div>

            <div className="usercard-container">
                <div><img src={image} alt="img"></img></div>
            </div>
            <div className="usercard-container">
                <div><img src={image} alt="img"></img></div>
            </div>
            <div className="usercard-container">
                <div><img src={image} alt="img"></img></div>
            </div>
            <div className="usercard-container">
                <div><img src={image} alt="img"></img></div>
            </div>
        </>

    )
}

export default UserCard