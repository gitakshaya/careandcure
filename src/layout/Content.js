import React from "react";
import { Layout, Carousel, Card } from "antd";
import intl from 'react-intl-universal';
const { Content } = Layout;

const AppContent = (props) => {
  return (
    <Content className="container-fluid bg-light">
      <div className="row">
        <Card className="p-3 mb-5 rounded bg-light col-sm-6 font-weight-bold text-monospace text-para font-family">
          <div className="my-2"></div>
         {intl.get("HOME_PARA_1")}
          <div className="my-2"></div>
         {intl.get("HOME_PARA_2")}
          <div className="my-2"></div>
          {intl.get("HOME_PARA_3")}
          <div className="my-2"></div>
          {intl.get("HOME_PARA_4")}
        </Card>
        {/* Small Slider Section */}
        <div className="col-sm-6">
          <Carousel autoPlay>
            <img src="/images/dr.jpeg" className="slider-img" alt="test"/>
            <img src="/images/dr-2.jpeg" className="slider-img" alt="test"/>
            <img src="/images/dr-3.jpeg" className="slider-img" alt="test"/>
            <img src="/images/dr-4.jpeg" className="slider-img" alt="test"/>
          </Carousel>
        </div>

        {/* Features Section */}
        <div className="row">
          <div className="col-sm-6">
            <img src="/images/logo.JPG" />
          </div>

          <div className="bg-light col-sm-6 font-family">
            <h1>{intl.get("FEATURES")}</h1>
            <h3>Hospital and Home visits</h3>
            <h3>HDU, Deluxe Rooms, General Ward</h3>
            <h3>ECG, Echo, TMT</h3>
            <h3>X-Ray, Ultrasound</h3>
            <h3>Pathalogy Lab</h3>
            <h3>Drug Store</h3>
            <h3>Ambulance Service</h3>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default AppContent;
