import "./Logo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
export default function Logo() {
  return (
    <div className="logo-container">
      <FontAwesomeIcon icon={solid("user-secret")} />
    </div>
  );
}
