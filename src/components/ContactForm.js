import "./ContactFormStyles.css";

function ContactForm() {
  console.log("contcct form  1223");
  return (
    <div className="from-container">
      <h1>send message to us</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4" />
        <button>Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
