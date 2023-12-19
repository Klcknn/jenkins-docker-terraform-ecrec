import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Card, Container, Toast } from "react-bootstrap";
import { getAdvertsByCities } from "../../../../api/adverts-service";
import { Swiper, SwiperSlide } from 'swiper/react';

const ExplorePropertiesByCities = () => {
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const toast = useRef(null);

  const fetchCities = async () => {
    try {
      const resp = await getAdvertsByCities();
      setCities(resp);
      console.log(resp)
    } catch (error) {
      const errMsg = Object.values(error.response.data)[0];
      toast.current.show({
        severity: "error",
        summary: "Error!",
        detail: errMsg,
        life: 3000,
      });
    }
  }


  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <>
      <div className="type-properties">
      {/* <Toast ref={toast} /> */}
        <Container>
          <div className="mb-4">
            <h2>Explore Properties</h2>
            <h5>By Cities</h5>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {cities.map((city, index) => (
              <SwiperSlide key={index}>

                <Card className="custom-card" key={index}>
                  {/* <Card.Img
                    variant="top"
                    src="https://archivaldesigns.com/cdn/shop/products/Peach-Tree-Front_1200x.jpg?v=1648224612"
                    alt="Card image"
                  /> */}
                  <Card.Body className="">
                    <div className="icon-box ms-2 mb-4">
                    </div>
                    <div className="">
                      <Card.Title className="">{city.cityName}</Card.Title>
                      <Card.Subtitle className="">{city.cityQuantity}</Card.Subtitle>
                    </div>
                  </Card.Body>
                </Card>


              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>
    </>
  );
};

export default ExplorePropertiesByCities;
