import React from "react";
import { Link } from "react-router-dom";

import Button from "../button/button.component";

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
        <Link className="tutor__profile" to={"/"}>
          <Button>View Profile</Button>
        </Link>
        <Link className="tutor__session" to={"/session-booking"}>
          <Button>Book Session</Button>
        </Link>
      </div>
    </li>
  );
};

export default Tutor;
