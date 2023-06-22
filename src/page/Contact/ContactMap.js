function ContactMap() {
  return (
    <iframe
      className="iframe_map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.735758501556!2d106.7816513739457!3d10.831522458177286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175271cddbcae39%3A0x992abe68a9948a66!2zMjYxIMSQw6xuaCBQaG9uZyBQaMO6LCBUxINuZyBOaMahbiBQaMO6IEIsIFF14bqtbiA5LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1683474239368!5m2!1svi!2s"
      height={450}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export default ContactMap;
