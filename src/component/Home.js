import React from 'react'
import { Carousel, Card } from "antd";
import intl from 'react-intl-universal';
import Iframe from 'react-iframe';

function Home() {
  return (
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
      <div className="col-sm-6 h-100">
        <Carousel className="h-100">
          <Iframe className="iframe-carousel" src="https://www.youtube.com/embed/ttTC4zaq7cc" title="COVID Awareness 1" frameborder="0" allowfullscreen></Iframe>
          <Iframe className="iframe-carousel" src="https://www.youtube.com/embed/FRZuP29DTVw" title="COVID Awareness 2" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
          <Iframe className="iframe-carousel" src="https://www.youtube.com/embed/ZdY0gGr_1Xg" title="COVID Awareness 3" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Iframe>
        </Carousel>
      </div>

      {/* Features Section */}
      <div className="row w-100 h-100">
        <div className="col-md-4 col-sm-6">
          <img src="/images/logo.JPG" />
        </div>

        <div className="bg-light col-md-4 col-sm-6 font-family">
          <h1>{intl.get("FEATURES")}</h1>
          <h3>Hospital and Home visits</h3>
          <h3>ICU, Deluxe Rooms, General Ward</h3>
          <h3>X-Ray, Ultrasound</h3>
          <h3>Pathalogy Lab</h3>
          <h3>Drug Store</h3>
          <h3>Ambulance Service</h3>
        </div>
        <div className="col-md-4 col-sm-12 w-100 h-100">
          <Carousel autoPlay className="h-100">
            <img className="slider-img" src="/images/Lifeline_edit2.jpg" />
            <img className="slider-img" src="/images/Lifeline1_edit1.jpg" />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Home
