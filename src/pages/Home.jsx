import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { ConatinerLayout } from "../components/Layout/styled";
import Text from "../components/Text";

function Home() {
  return (
    <div>
      <Banner />
      <ConatinerLayout>
        <Text />
        <Card />
      </ConatinerLayout>
      <ConatinerLayout>
        <Text />
        <Card />
      </ConatinerLayout>
      <ConatinerLayout>
        <Text />
        <Card />
      </ConatinerLayout>
    </div>
  );
}
export default Home;
