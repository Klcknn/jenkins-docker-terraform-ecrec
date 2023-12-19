import React from "react";
import { Container, ButtonGroup, Button, Form, Image } from "react-bootstrap";
import { LiaSearchSolid } from "react-icons/lia";
import "./style.scss";
const Banner = () => {
  return (
    <Container className="edit">
      <div className="box">
        <h1>
          Easy Way to Find a <br /> Perfect Property
        </h1>
        <ButtonGroup className="d-flex flex-column" aria-label="Basic example">
          <div className="up-side">
            <Button className="bg-white border-0">Rent</Button>
            <Button className="bg-white border-0">Sale</Button>
          </div>
          <div className="bottom-side d-flex p-3 bg-white w-50 gap-2 ">
            <input
              className="form-control mr-sm-2 border-0 rounded-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button className="btn btn-primary rounded-4">
              <LiaSearchSolid size={25} color="white" />
            </button>
          </div>
          <Form className="d-lg-flex gap-3 ms-3 mt-2 d-none">
            <div className="radio-box">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label">House</label>
            </div>
            <div className="radio-box">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label">Apartment</label>
            </div>
            <div className="radio-box">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label">Villa</label>
            </div>
            <div className="radio-box ">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label">Office</label>
            </div>
          </Form>
        </ButtonGroup>
      </div>
    </Container>
  );
};
export default Banner;