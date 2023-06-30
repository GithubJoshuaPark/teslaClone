import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order Online for Touchless Delivery1"
        bgimg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Inventory1"
      />
      <Section
        title="Model X"
        desc="Order Online for Touchless Delivery2"
        bgimg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Inventory2"
      />
      <Section
        title="Model Y"
        desc="Order Online for Touchless Delivery3"
        bgimg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Inventory3"
      />
      <Section
        title="Model 3"
        desc="Order Online for Touchless Delivery4"
        bgimg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Inventory4"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        desc="Money-back guarantee"
        bgimg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        bgimg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        desc=""
        bgimg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
