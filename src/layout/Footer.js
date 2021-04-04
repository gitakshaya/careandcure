import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

const AppFooter = () => {
    return (
        <Footer className="row text-dark">
           <div className="col-md-4 mt-4 ">
          <h4>Care And Cure</h4>
          <h4>Rameshwar park apartments,</h4>
          <h4>near Spice Katta Restaurant,</h4>
          <h4>Jawahar Nagar,</h4>
          <h4>Akola,</h4>
          <h4>Maharashtra 444001</h4>
        </div>

        <div className="col-md-4 mt-4 ">
          <h4>For booking an appointment</h4>
          <h4>+91 8425845856</h4>
          <h4>Timing – 8:00 AM to 10:00 PM</h4>
          <h4>Connect to Care and Cure</h4>
        </div>
      </Footer>
 
    );
};

export default AppFooter;