import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react'

function AboutUs() {
    return (
        <div>
            <h1>About Us</h1>

            <div className="row">
                <div className="col-sm-12 col-md-6 card" >
                    <img className="card-img-top" src="/images/dr-4.jpeg" alt="Dr. Sumit Agrawal" />
                    <div className="card-body">
                        <h5 className="card-title">Dr. Sumit Agrawal</h5>
                        <p className="card-text">
                            MBBS, MD
                            (Consultant Intensivist &amp;
                            Anaesthesiologist)
                            J.J.Hospital, Mumbai
                            Ex. Senior Intesivist
                            (BKC COVID Facility, Mumbai)
                            Ex. Intensivist (FORTIS, Mumbai)
                            Ex. Specialist Medical Officer
                            (E.S.I.S Hospital, Mumbai)
                            Ex. Medical Officer (BMC, Mumbai)
                            Reg. No.: MCI-1245495
                            (M): 9970284068
                    </p>
                    </div>
                </div>



  <Card className="col-sm-12 col-md-6 card" >

    cover={
    <img className="card-img-top" src="/images/dr-4.jpeg" alt="Dr. Neha Agrawal" />
        }
    <Meta
        title="Dr. Neha Agrawal"
        description=
        {<pre>{`
    MBBS, MD Medicine
      (Consultant Physician)
      Ex Physician (AIIMS, Jodhpur)
      Ex. Assistant Professor (Dr. S.N.M.C)
      Reg. No.: RMC-15317
      (M): 8425845856"
`
     }</pre>}
    />
    </Card>


                <h2>Objectives of - Care And Cure</h2>

                <pre>{`To provide a high quality personalized complete medical care to the family 
                       (excluding the pediatric age group). We believe in – Early diagnosis and adequate
                        treatment to prevent further complications
                    `}</pre>

                <h2>Our Mission</h2>
                <pre>{`To provide healthcare of international standards through a team of qualified 
                professionals and at a cost affordable to the community. We are also committed to 
                maintain clinical excellence by focusing on healthcare academics with the use of latest technology.
            `}</pre>

                <pre>
                    {`
                To provide best quality :
                1. Preventive
                2. Primary
                3. Secondary – Health Care
                `}
                </pre>

                <h2>Vision</h2>
                <h3>To prevent the progression of disease by intervening at early stages</h3>
                <h3>Patient awareness regarding early and timely intervention to avoid disease complication.</h3>
                <h3>Achieving health of our patients in all dimensions – Physical, Mental and Spiritual.</h3>

                <h2>Values</h2>
                <h3>Perfection – Quality care through trained professionals.</h3>
                <h3>Politeness – Realising the sufferings of our patients, we take proper care in understanding their pain and providing them, the utmost, gentle, polite and motherly care.</h3>
                <h3>Technology – Using the latest technology to improve patient care, easy communication, easy reproducibility and paperless, fast and portable health care facility.</h3>
                <h3>Environment – To provide calm, clean, pleasant and safe environment to expedite the healing process.</h3>


            </div>
        </div>
    )
}

export default AboutUs;