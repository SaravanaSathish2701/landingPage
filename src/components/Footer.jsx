const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <a href="#">About</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Terms of Use</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      <div>
        <p> © Your Website 2023.All Rights Reserved.</p>
      </div>
      <div>
        <a href="https://www.facebook.com/">
          <i className="bi-facebook"></i>
        </a>
        <a href="https://www.twitter.com/">
          <i className="bi-twitter"></i>
        </a>
        <a href="https://www.instagram.com/">
          <i className="bi-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
