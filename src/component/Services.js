import { Card, List, Row, Col } from 'antd'
import React from 'react'

function Services() {
    return (
        <Row className=" d-flex justify-content-center" type="flex" gutter={[32, 8]}>
            <Col md={10} sm={24}>
                <Card className="h-100" title={<h3>Home Service</h3>} >
                    <p>We offer entertainment facility in the form of cable enabled TV sets. We also have a library to pick up and read books of your choice.</p>
                    <List>
                        <List.Item>A/c deluxe rooms</List.Item>
                        <List.Item>Special room</List.Item>
                        <List.Item>HDU</List.Item>
                        <List.Item>General Ward</List.Item>
                    </List>
                </Card>
            </Col>

            <Col md={10} sm={24}>
                <Card title={<h3>Patient care</h3>}>
                    <p>We deal with patients with utmost care &amp; offer them the best possible healthcare</p>
                    <List>
                        <List.Item>Nebulisation</List.Item>
                        <List.Item>Blood sugar monitoring – Glucometer.</List.Item>
                        <List.Item>Pulse Oxymeter.</List.Item>
                        <List.Item>Suction machine,Syringe Pumps.</List.Item>
                        <List.Item>Oxygen,Defibrillator</List.Item>
                    </List>
                </Card>
            </Col>




        </Row>
    )
}

export default Services
