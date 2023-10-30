import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ratio from "react-bootstrap/Ratio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";

const Home = () => {
  const [ showContactForm, setShowContactForm ] = useState(false);
  const [ showFormSuccess, setShowFormSuccess ] = useState(false);

  return (
    // <div style={{ height: '1000px' }}>
      <main>

        <Ratio aspectRatio='16x9'>
          <embed type='image/jpg' src='/src/app/landing.jpg' />
        </Ratio>

        {/* <Container>
          <Row>
            <Col>
              <p>한국거주 영주권, 시민권자 세금보고</p>
              <p>증여, 상속세, 양도세 상담</p>
              <p>메디케어 건강보험 안내</p>

              {!showFormSuccess && (

                  <button onClick={() => setShowContactForm(true)}>
                    <h3>
                      <FontAwesomeIcon icon={faCalendarDays} />
                      Schedule A Consultation
                    </h3>
                  </button>

              )}

              {showContactForm && (
                <ContactForm
                  setShowContactForm={setShowContactForm}
                  setShowFormSuccess={setShowFormSuccess}
                />
              )}

              {showFormSuccess &&
                <h3>Thank you for your submission!</h3>
              }
            </Col>
          </Row>
        </Container> */}
        </main>
    // </div>
  );
};

export default Home;