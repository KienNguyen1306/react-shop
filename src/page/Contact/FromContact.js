import emailjs from "@emailjs/browser";
import { useRef } from "react";

function FromContact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_u575qo5",
        "template_7f0i5ki",
        form.current,
        "qEawHcUDWvW8iaW8K"
      )
      .then(
        (result) => {console.log('ok')},
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form className="from" ref={form} onSubmit={sendEmail}>
      <div className="controll">
        <input placeholder="Name" name="user_name" />
      </div>
      <div className="controll">
        <input placeholder="Email" name="user_email" />
      </div>
      <div className="controll">
        <input placeholder="Số điện thoại" />
      </div>
      <div className="controll">
        <input placeholder="Địa chỉ" />
      </div>
      <textarea
        id="content"
        name="message"
        rows="5"
        cols="20"
        placeholder="Lời nhắn"
      ></textarea>
      <button className="btn_contact" type="submit">
        Gửi
      </button>
    </form>
  );
}

export default FromContact;
