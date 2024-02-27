import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faLocationDot,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import EmailForm from './EmailForm';
import PageHeader from './PageHeader';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import '../styles/contact-us.css';

const ContactUs = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const newYorkOfficeContactInfo = () => (
    <section className="mb-10">
      <div>
        <div>
          <h3 className="ps-0 pb-3 contact-us-office-title font-semibold">
            New York Office
          </h3>
        </div>
        <div className="flex gap-3">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
          </div>
          <div className="ps-0">
            <address className="mb-2 not-italic">
              163-10 Northern Boulevard, #311
              <br />
              Flushing, NY 11358
            </address>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
          </div>
          <div className="ps-0">
            <p className="mb-2">
              <a href="tel:+1-718-359-1096">(718) 359-1096</a>
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
          <div className="ps-0">
            <p className="mb-2">jamesparktax@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faClock} />
            </span>
          </div>
          <div className="ps-0">
            <p className="mb-5">Mon - Fri : 9 AM - 6 PM EST</p>
          </div>
        </div>
      </div>
    </section>
  );

  const newJerseryOfficeContactInfo = () => (
    <section>
      <div>
        <div>
          <h3 className="ps-0 pb-3 contact-us-office-title font-semibold">
            New Jersey Office
          </h3>
        </div>
        <div className="flex gap-3">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
          </div>
          <div className="ps-0">
            <address className="mb-2 not-italic">
              725 Grand Avenue, #301
              <br />
              Ridgefield, NJ 07657
            </address>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
          </div>
          <div className="ps-0">
            <p className="mb-2">
              <a href="tel:+1-201-625-3060">(201) 625-3060</a>
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
          </div>
          <div className="ps-0">
            <p className="mb-2">jamesparktax@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="ps-0">
            <span>
              <FontAwesomeIcon icon={faClock} />
            </span>
          </div>
          <div className="ps-0">
            <p className="mb-5">Mon - Fri : 9 AM - 6 PM EST</p>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <div className="services-header-image">
        <PageHeader title="Contact Us" />
      </div>
      <div className="max-w-[2240px] mx-auto">
        <div className="mx-5 md:mx-10 mb-20">
          <div className="flex flex-col mt-20">
            <Tabs aria-label="Options">
              <Tab
                key="ny-office"
                title="NEW YORK OFFICE"
                className="font-semibold"
              >
                <Card className="rounded-none border border-gray-200 shadow-none">
                  <CardBody>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12088.22206060176!2d-73.8026996!3d40.7608037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c261502c1e2cf7%3A0x8f3b1894cd7e0382!2zSmFtZXMgUGFyayBUYXggJiBBY2NvdW50aW5nLCBJbmMuICjtmozqs4TrspXsnbgp!5e0!3m2!1sen!2sus!4v1698084181313!5m2!1sen!2sus"
                      width="100%"
                      height="450"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="nj-office"
                title="NEW JERSEY OFFICE"
                className="font-semibold"
              >
                <Card className="rounded-none border border-gray-200 shadow-none">
                  <CardBody>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.27360008062965!2d-74.00572083325287!3d40.840434243643735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f70b3b69f52b%3A0x3fe2c115711b0927!2s725%20Grand%20Ave%2C%20Ridgefield%2C%20NJ%2007657!5e0!3m2!1sen!2sus!4v1698263388796!5m2!1sen!2sus"
                      width="100%"
                      height="450"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>

          <div className="flex flex-col md:flex-row gap-10 lg:gap-14 mt-20">
            <div className="w-full md:w-1/2">
              {newYorkOfficeContactInfo()}
              {newJerseryOfficeContactInfo()}
            </div>
            <div className="w-full md:w-1/2">
              <EmailForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
