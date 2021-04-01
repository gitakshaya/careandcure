import React from "react";
import { Layout, Breadcrumb, Carousel } from "antd";

const { Content } = Layout;

const AppContent = (props) => {
  return (
    <Content className="container-fluid bg-light">
      <div className="row">
        <div className=" shadow-lg p-3 mb-5 bg-white rounded bg-white rounded bg-light col-sm-6 font-weight-bold font-italic text-monospace text-danger font-family">
          <br></br>
          We are a 15 bedded hospital located at a prime location in Akola city,
          with an easy approach from Railway Station or Bus Stand. We are
          serving our patients since last 7 years. We have been giving quality
          services at a reasonable cost.
          <br></br>
          <br></br>
          We believe in – “Early diagnosis and adequate treatment” to prevent
          further complications. We offer all the necessary services required
          for the overall patient management and preventive care needed for all
          the adults in your family.
          <br></br>
          <br></br>
          We are the pioneers in introducing e-clinic concept in Akola for OPD
          care which offers the benefit of generating prescription in less than
          a minute, complete patient record for paperless follow-ups and
          portability of medical records through android application, indoor
          patient management modules and facility to generate prescription and
          instructions in regional languages.
        </div>

        {/* Small Slider Section */}
        <div className="col-sm-6">
          <Carousel autoPlay>
            <img src="/images/dr.jpeg" className="slider-img" />
            <img src="/images/dr-2.jpeg" className="slider-img" />
            <img src="/images/dr-3.jpeg" className="slider-img" />
            <img src="/images/dr-4.jpeg" className="slider-img" />
          </Carousel>
        </div>

        <br></br>

        {/* Slider Section */}
        <div className="h-50 shadow-lg p-3 mb-5 bg-white rounded bg-white rounded ">
          <Carousel className="vertical-slider" autoPlay>
            <img src="/images/dr-1.jpeg" className="slider-img" />
            <img src="/images/dr-2.jpeg" className="slider-img" />
            <img src="/images/dr-3.jpeg" className="slider-img" />
          </Carousel>
        </div>

        {/* Features Section */}
        <div className="row">
          <div className="col-sm-6">
            {" "}
            <img src="/images/logo.JPG" />
          </div>

          <div className="bg-light col-sm-6 font-family">
            <h1>Our Features</h1>
            <br></br>
            <h2>15 Bedded Multispeciality Center</h2>
            <h2>HDU, Deluxe Rooms, General Ward</h2>
            <h2>ECG, Echo, TMT</h2>
            <h2>X-Ray, Ultrasound</h2>
            <h2>Pathalogy Lab</h2>
            <h2>Drug Store</h2>
            <h2>Amdulance Service</h2>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default AppContent;
