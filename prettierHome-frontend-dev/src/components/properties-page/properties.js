import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Searchbar from "./searchbar";
import PropertiesCard from "./properties-card";
import properties from "../../helpers/data/properties.json";
import Filter from "../common/filter";
import "./properties.scss";
import {getByAdvertsPage} from "../../../src/api/adverts-service"

const Properties = () => {

  const loadAdverts = async () => {
 
    try {
      const resp = await getByAdvertsPage();
      console.log(resp)
    } catch (error) {
      console.log(error);
    }
  };


useEffect(() => {
  loadAdverts();
}, [])





  return (
    <Container className=" d-flex flex-column flex-lg-row justify-content-between">
      <Searchbar />
      <Filter />
      <Row className="row-cols-1 row-cols-sm-1 row-cols-md-2  row-cols-lg-2  g-5 properties">
        {properties.map((properties) => (
          <Col key={properties.id}>
            <PropertiesCard {...properties} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Properties;
