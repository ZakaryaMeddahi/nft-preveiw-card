import React from "react";
import "./Card.css";
import Picture from "../Picture/Picture";
import CardInfo from "../CardInfo/CardInfo";

const Card = (props) => {
    return (
        <>
            <div className="card">
                <Picture image={props.image}/>
                <CardInfo name={props.name} 
                    desc={props.desc} 
                    price={props.price} 
                    duration={props.duration}
                    creatorImage={props.creatorImage}
                    creatorName={props.creatorName}
                />
            </div>
        </>
    );
}

export default Card;