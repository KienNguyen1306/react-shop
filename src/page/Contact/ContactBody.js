import MainTitle from "../../components/Shared/MainTitle";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import FromContact from "./FromContact";

function ContactBody() {
  return (
    <div className="contact_body">
      <div className="container">
        <div className="left">
          <ContactMap />
        </div>
        <div className="right">
          <h3 className="heading_contact">Floda</h3>
          <ContactInfo />
          <MainTitle>LIÊN HỆ VỚI CHÚNG TÔI</MainTitle>
          <div className="spacing"></div>
          <FromContact />
        </div>
      </div>
    </div>
  );
}

export default ContactBody;
