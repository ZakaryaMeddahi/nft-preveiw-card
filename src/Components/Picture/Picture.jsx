import React from "react";
import "./Picture.css";
import veiw from "../images/icon-view.svg";

const Picture = (props) => {
    return (
        <>
            <div className="image">
                <img className="nft-img" src={props.image} alt="" />
                <div className="overlay">
                    <img src={veiw} alt="" />
                </div>
            </div>
        </>
    );
}

export default Picture;