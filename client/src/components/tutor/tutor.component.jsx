import React from "react";
import { Link } from "react-router-dom";

const Tutor = () => {
  return (
    <li className="tutor">
      <div className="tutor__info">
        <h4 className="tutor__header">Jane Smith</h4>
        <p className="tutor__info-item tutor__info-item--subj">
          <strong>Subject:</strong> Mathematics
        </p>
        <p className="tutor__info-item tutor__info-item--qual">
          <strong>Qualifications:</strong> M.Sc. in Mathematics
        </p>
        <p className="tutor__info-item tutor__info-item--exp">
          <strong>Experience:</strong> 5 years
        </p>
      </div>
      <div className="tutor__actions">
        <Link className="tutor__action-link" to={"#"}>
          View Profile
        </Link>
        <Link className="tutor__action-link" to={"/session-booking"}>
          Book Session
        </Link>
      </div>
    </li>
  );
};

export default Tutor;
