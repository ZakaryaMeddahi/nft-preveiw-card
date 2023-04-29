import React from "react";
import "./CardInfo.css";
import ethereum from "../images/icon-ethereum.svg"
import clock from "../images/icon-clock.svg"

const CardInfo = (props) => {
    return (
        <>
            <div className="container">
                <div className="container1">
                    <h3 className="name">
                        {props.name}
                        {/* Equilibrium #3429 */}
                    </h3>
                    <p className="desc">
                        {props.desc}
                        {/* Our Equilibrium collection promotes balance and calm */}
                    </p>
                </div>
                <div className="container2">
                    <div className="price">
                        <img src={ethereum} alt="" />
                        <span>{props.price}ETH</span>
                    </div>
                    <div className="duration">
                        <img src={clock} alt="" />
                        <p>
                            {props.duration}
                        </p>
                    </div>
                </div>
                <span className="line"></span>
                <div className="user">
                    <img src={props.creatorImage} alt="" />
                    <p>Creation of <span>{props.creatorName}</span></p>
                </div>
            </div>
        </>
    );
}

export default CardInfo;