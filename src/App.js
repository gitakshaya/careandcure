import './App.css';
import logo from '../src/images/logo.JPG';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from '../src/images/dr.jpeg';
import img2 from '../src/images/dr-1.jpeg';
import img3 from '../src/images/dr-2.jpeg';
import img4 from '../src/images/dr-3.jpeg';
import img5 from '../src/images/dr-4.jpeg';
import img6 from '../src/images/dr-5.jpeg';

// import Icon from '@material-ui/core/Icon';

function App() {
  return (

    <div className="container-fluid bg-light shadow-lg p-3 mb-5 bg-white rounded bg-white rounded mt-2">

      <br></br>

      {/* Navigation */}
      <div className="row">
        <div className="col-sm-6 bg-light shadow-lg p-3 mb-5 bg-white rounded bg-white rounded">
          <img src={logo} alt="CareAndCureLogo" width="100" height="100" />
          <span class=" ml-2 mt-4 font-weight-bold  text-warning text-size">Care And Cure</span>
        </div>
        <div className="col-lg-6 mt-3">
          <a class="btn btn-secondary  ml-5" href="#" role="button">Home</a>
          <a class="btn btn-info ml-4" href="#" role="button">About Us</a>
          <a class="btn btn-success ml-4" href="#" role="button">Services</a>
          <a class="btn btn-warning ml-4" href="#" role="button">Doctors</a>
          <a class="btn btn-danger ml-4" href="#" role="button">Contact Us</a>
        </div>
      </div>

      {/* Content Section */}
      <br></br>
      <div className="row">

        <div className=" shadow-lg p-3 mb-5 bg-white rounded bg-white rounded bg-light col-sm-6 font-weight-bold font-italic text-monospace text-danger font-family">
          <br></br>
       We are a 15 bedded hospital located at a prime location in Akola city,
       with an easy approach from Railway Station or Bus Stand. We are serving our patients
       since last 7 years. We have been giving quality services at a reasonable cost.
       <br></br>
          <br></br>
          We believe in – “Early diagnosis and adequate treatment” to prevent further complications.
       We offer all the necessary services required for the overall patient management and preventive care
       needed for all the adults in your family.
       <br></br>
          <br></br>

           We are the pioneers in introducing e-clinic concept in Akola for OPD care which
       offers the benefit of generating prescription in less than a minute, complete patient record
       for paperless follow-ups and portability of medical records through android application,
      indoor patient management modules and facility to generate prescription and instructions in regional languages.
        </div>

        {/* Small Slider Section */}
        <div className="col-sm-6">
          <AliceCarousel autoPlay autoPlayInterval="3000">
            <img src={img1} className="sliderimg" />
            <img src={img5} className="sliderimg" />
            <img src={img4} className="sliderimg" />
            <img src={img6} className="sliderimg" />
          </AliceCarousel>

        </div>

      </div>

      <br></br>

      {/* Slider Section */}
      <br></br>
      <div className="h-50 shadow-lg p-3 mb-5 bg-white rounded bg-white rounded ">
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src={img1} className="sliderimg" />
          <img src={img2} className="sliderimg" />
          <img src={img3} className="sliderimg" />
          <img src={img4} className="sliderimg" />
        </AliceCarousel>
      </div>



      {/* Features Section */}
      <div className="row">
        <div className="col-sm-6"> <img src={logo} /></div>

        <div className="bg-light col-sm-6 font-family">
          <h1>Our Features</h1>
          <br></br>
          <h2>15 Bedded Multispeciality Center</h2>
          <h2>HDU, Deluxe Rooms, General Ward</h2>
          <h2>ECG, Echo, TMT</h2>
          <h2>X-Ray, Ultrasound</h2>
          <h2>Pathalogy Lab</h2>
          <h2>Drug Store</h2>
          <h2>Ashadow-lg p-3 mb-5 bg-white roundedulance Service</h2>


        </div>

      </div>

      <br></br>

      {/* Footer */}
      <div className="row bg-secondary font-family">
        <div className="col-sm-5">
          <br></br>
          <a class="link" href="#" >Home</a>
          <br></br>
          <a class="link" href="#">About Us</a>
          <br></br>

          <a class="link" href="#" >Services</a>
          <br></br>

          <a class="link" href="#">Doctors</a>
          <br></br>

          <a class="link" href="#" >Contact Us</a>

        </div>
        <div className="col-sm-4 mt-4 ">
          <h3>Care And Cure</h3>
          <h3>Rameshwar park apartments,</h3>
          <h3>near Spice Katta Restaurant,</h3>
          <h3>Jawahar Nagar,</h3>
          <h3>Akola,</h3>
          <h3>Maharashtra 444001</h3>



        </div>

        <div className="col-sm-3 mt-4 ">
          <h3>For Booking An Appointment</h3>
          <h3>9856789865</h3>
          <h3>(Timing – 8:00 AM to 10:00 PM)</h3>
        </div>
      </div>

    </div>
  )
}


export default App;
