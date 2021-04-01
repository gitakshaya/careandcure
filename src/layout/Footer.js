import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const AppFooter = () => {
    return (
        <Footer className="row text-dark">
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
      </Footer>
 
    );
};

export default AppFooter;