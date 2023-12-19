import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Card, Container } from "react-bootstrap";
import { getAdvertsByCategories } from "../../../../api/adverts-service";
import { Toast } from "primereact/toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ExplorePropertiesByType = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const toast = useRef(null);

  const fetchCategories = async () => {
    try {
      const resp = await getAdvertsByCategories();
      setCategories(resp);
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
    fetchCategories();
  }, []);

  return (
    <>
      <Toast ref={toast} />
      <div className="type-properties">
        <Container>
          <div className="mb-4">
            <h2>Explore Properties</h2>
            <h5>By Types</h5>
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
            {categories.map((category, index) => (
              <SwiperSlide key={index}>

                <Card className="custom-card" key={index}>
                  {/* <Card.Img
                    variant="top"
                    src="https://archivaldesigns.com/cdn/shop/products/Peach-Tree-Front_1200x.jpg?v=1648224612"
                    alt="Card image"
                  /> */}
                  <Card.Body className="">
                    <div className="icon-box ms-2 mb-4">
                      <FontAwesomeIcon icon={category.icon} />
                    </div>
                    <div className="">
                      <Card.Title className="">{category.categoryName}</Card.Title>
                      <Card.Subtitle className="">{category.categoryQuantity}</Card.Subtitle>
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

export default ExplorePropertiesByType;
