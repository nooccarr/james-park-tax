const ContactUs = () => {
  return (
    <div>
      <div>
        <h2>Contact Us</h2>
      </div>
      <main>
        <address>
          163-10 Northern Blvd,<br/> 
          Flushing, NY 11358<br/>
          <p>
            <span>Phone : </span>
            <a href="tel:+7183591098">(718) 359-1098</a>
          </p>
          <p>
            <span>Email : </span>
            jamesparktax@gmail.com
          </p>
        </address>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.048798360032!2d-73.80538462342834!3d40.76095143461667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c289efce75197d%3A0x85bbcf1ddd8c7cd7!2s163-10%20Northern%20Blvd%2C%20Flushing%2C%20NY%2011358!5e0!3m2!1sen!2sus!4v1697651404286!5m2!1sen!2sus" 
          width="600" 
          height="450" 
          style={{ border: 0 }}
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
      <aside>

      </aside>
    </div>
  );
};

export default ContactUs;