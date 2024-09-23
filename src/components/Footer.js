import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>choose your favourite destination</p>
        </div>
        <div>
          <a href="/">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-square-behance"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-square-twitter"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>

        <div>
          <h4>Community</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
