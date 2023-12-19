import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const PropertiesCard = ({ title, location, price }) => {
  return (    
  <Link>
    <Card className="border-0">
  
      <Card.Img
        className="rounded-4"
        src="/images/content/house.webp"
        alt="Card image"
        id="image"
      />
      <Card.ImgOverlay>
        <div className="label d-flex justify-content-between p-3 ">
          <div>
            <h6>{title}</h6>
            <h6>{location} </h6>
          </div>

          <div>
            <button>{price}</button>
          </div>
        </div>
      </Card.ImgOverlay>
    </Card>
    </Link>
  );
};

export default PropertiesCard;
