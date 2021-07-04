import React from "react";
import MyAppBar from "./modules/views/MyAppBar";
import AppBanner from "./modules/views/AppBanner";
import withRoot from "./modules/withRoot";
import ProductValues from "./modules/views/ProductValues";

function HomePage() {
  return (
    <React.Fragment>
      <MyAppBar />
      <AppBanner />
      <ProductValues />
    </React.Fragment>
  );
}

export default withRoot(HomePage);
