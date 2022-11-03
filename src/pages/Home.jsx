import React, { memo } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { ConatinerLayout } from "../components/Layout/styled";

function Home() {
  return (
    <div>
      <Banner />
      <ConatinerLayout>
        <Card />
      </ConatinerLayout>
    </div>
  );
}
export default memo(Home);
