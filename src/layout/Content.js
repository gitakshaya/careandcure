import React from "react";
import { Layout, Carousel, Card } from "antd";

const { Content } = Layout;

const AppContent = (props) => {
  return (
    <Content className="container-fluid bg-light">
      <div className="row">
        <Card className="p-3 mb-5 bg-white rounded bg-white rounded bg-light col-sm-6 font-weight-bold font-italic text-monospace text-danger font-family">
          <div className="my-2"></div>
          We are a 15 bedded hospital located at a prime location in Akola city,
          with an easy approach from Railway Station or Bus Stand. We are
          serving our patients since last 7 years. We have been giving quality
          services at a reasonable cost.
          <div className="my-2"></div>
          We believe in – “Early diagnosis and adequate treatment” to prevent
          further complications. We offer all the necessary services required
          for the overall patient management and preventive care needed for all
          the adults in your family.
          <div className="my-2"></div>
          We are the pioneers in introducing e-clinic concept in Akola for OPD
          care which offers the benefit of generating prescription in less than
          a minute, complete patient record for paperless follow-ups and
          portability of medical records through android application, indoor
          patient management modules and facility to generate prescription and
          instructions in regional languages.
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
            <h1>Our Features</h1>
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
