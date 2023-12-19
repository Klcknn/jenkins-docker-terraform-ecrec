import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./style.scss";

const PopularProperties = () => {
  return (
    <div className="type-properties">
      <Container>
        <div className="mb-4">
          <h2>Discover Popular Properties</h2>
          <h5>Featured properties</h5>
        </div>

        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 g-5">
          <Col>
            <Card className="border-0">
              <Card.Img
                className="rounded-4"
                src="/images/content/house.webp"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <div className="label d-flex justify-content-between p-3 ">
                  <div>
                    <h6>Luxury villa in Central Park</h6>
                    <h6>Pendik, istanbul </h6>
                  </div>

                  <div>
                    <button>$1500,00</button>
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Img
                className="rounded-4"
                src="/images/content/house.webp"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <div className="label d-flex justify-content-between p-3 ">
                  <div>
                    <h6>Luxury villa in Central Park</h6>
                    <h6>Pendik, istanbul </h6>
                  </div>

                  <div>
                    <button>$1500,00</button>
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Img
                className="rounded-4"
                src="/images/content/house.webp"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <div className="label d-flex justify-content-between p-3 ">
                  <div>
                    <h6>Luxury villa in Central Park</h6>
                    <h6>Pendik, istanbul </h6>
                  </div>

                  <div>
                    <button>$1500,00</button>
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Img
                className="rounded-4"
                src="/images/content/house.webp"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <div className="label d-flex justify-content-between p-3 ">
                  <div>
                    <h6>Luxury villa in Central Park</h6>
                    <h6>Pendik, istanbul </h6>
                  </div>

                  <div>
                    <button>$1500,00</button>
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Img
                className="rounded-4"
                src="/images/content/house.webp"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <div className="label d-flex justify-content-between p-3 ">
                  <div>
                    <h6>Luxury villa in Central Park</h6>
                    <h6>Pendik, istanbul </h6>
                  </div>

                  <div>
                    <button>$1500,00</button>
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Img
                className="rounded-4"
                src="/images/content/house.webp"
                alt="Card image"
              />
              <Card.ImgOverlay>
                <div className="label d-flex justify-content-between p-3 ">
                  <div>
                    <h6>Luxury villa in Central Park</h6>
                    <h6>Pendik, istanbul </h6>
                  </div>

                  <div>
                    <button>$1500,00</button>
                  </div>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PopularProperties;
