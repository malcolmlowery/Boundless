import Button from "../button/Button";
import "./header.css";
import companyLogo_01 from "../../assets/images/company-logo-01.png";

const Header = () => {
  return (
    <nav className="main-navbar">
      <img
        className="main-navbar__logo"
        alt="company logo"
        src={companyLogo_01}
      />
      <h1 className="main-navbar__company-name">Boundless</h1>
      <ul className="main-navbar__buttons-group">
        <li>
          <Button>Going Solar</Button>
        </li>
        <li>
          <Button>Service Areas</Button>
        </li>
        <li>
          <Button>Education</Button>
        </li>
        <li>
          <Button>About</Button>
        </li>
      </ul>
      <span className="spacer"></span>
      <Button style={{ marginRight: 30 }}>Chat with a Specialist</Button>
      <Button type="fill">Request Service</Button>
    </nav>
  );
};

export default Header;
