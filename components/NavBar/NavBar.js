import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

import Logo from "../Logo/Logo";

export default function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-links">
        <p>Work</p>
        <p>Contact</p>
      </div>
      <Logo />
      <div className="nav-logo">
        <FontAwesomeIcon className="nav-logos" icon={brands("facebook-f")} />
        <FontAwesomeIcon className="nav-logos" icon={brands("github")} />
        <FontAwesomeIcon className="nav-logos" icon={brands("instagram")} />
        <FontAwesomeIcon className="nav-logos" icon={brands("twitter")} />
      </div>
    </nav>
  );
}
