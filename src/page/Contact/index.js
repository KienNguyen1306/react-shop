import Acticletop from "../../components/Acticletop";
import "./Contact.css";
import ContactBody from "./ContactBody";
function Contact() {
  return (
    <div className="about">
      <div className="body">
        <Acticletop title="Liên Hệ" link="/contact" />
        <ContactBody />
      </div>
    </div>
  );
}

export default Contact;
