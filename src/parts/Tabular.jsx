import React from "react";
import { Col, Row, Container, Tab, Tabs } from "react-bootstrap";
import Audiobook from "./Audiobook";

const Tabular = () => {
  return (
    <>
      <Container className="mt-5"> 
        <Row>
          <Col lg="8">
            <Tabs
              defaultActiveKey="summary"
              id="uncontrolled-tab-example"
              className="mb-3 "
            >
              <Tab eventKey="summary" title="Summary">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, architecto rem! Quo dolores dignissimos officia
                  sequi! Sapiente sunt voluptate asperiores praesentium quia
                  officia aliquam error. At velit illum reprehenderit dolores!
                </p>
              </Tab>
              <Tab eventKey="insights" title="Insights">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  possimus suscipit enim distinctio vero tenetur ad dicta
                  delectus odit, alias laboriosam, expedita blanditiis aperiam
                  odio aspernatur minima, velit cum perspiciatis.
                </p>
              </Tab>
              <Tab eventKey="quotes" title="Quotes" >
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum commodi iure temporibus consequuntur soluta
                  exercitationem incidunt quia quisquam similique dolorem,
                  excepturi cumque laudantium qui tenetur, possimus perspiciatis
                  quis nobis tempore?
                </p>
              </Tab>
              <Tab eventKey="community" title="Community" >
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Illum commodi iure temporibus consequuntur soluta
                  exercitationem incidunt quia quisquam similique dolorem,
                  excepturi cumque laudantium qui tenetur, possimus perspiciatis
                  quis nobis tempore?
                </p>
              </Tab>
            </Tabs>
          </Col>
          <Col lg="4">
              <Audiobook />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Tabular;
