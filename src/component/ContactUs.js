import { Card } from 'antd'
import React from 'react'
import Iframe from 'react-iframe'

function ContactUs() {
    return (
        <div className="row mt-2">
            <div className=" col-md-5 col-sm-12 my-2">
                <Card className="h-100cc">
                <h6 className="text-muted">You can find us on Google</h6>
                <Iframe className="map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.068864741046!2d77.00997341440207!3d20.70742800404726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd72f8f4b5a640f%3A0xf363bf9cd733d44c!2sDr.%20Sumit%20Agrawal!5e0!3m2!1sen!2sin!4v1631362347103!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></Iframe>
                </Card>
            </div>
            <div className="col-md-5 col-sm-12">
                <Card className="mt-2 d-flex justify-content-center align-items-center">
                    <div>
                        <h2 className="text-first">Contact Info</h2>
                        <h5>For Booking an appointment – Please call on  :</h5>
                        <h5>+91 9970284068(Timing – 8:00 AM to 10:00 PM)</h5>
                        <h5>Website :https://care-and-cure.herokuapp.com/</h5>
                        <h5>E-Mail : dr.sumitagrawal12@gmail.com</h5>
                    </div>
                </Card>

            </div>
        </div>
    )
}

export default ContactUs
