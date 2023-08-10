import React from "react";
import { Link } from "react-router-dom";

import Button from "../button/button.component";

const Tutor = ({ tutor }) => {
  return (
    <li className="tutor" id={tutor.id}>
      <div className="tutor__info">
        <h4 className="tutor__header">{tutor.name}</h4>
        <p className="tutor__info-item tutor__info-item--subj">
          <strong>Subject:</strong> {tutor.subject}
        </p>
        <p className="tutor__info-item tutor__info-item--qual">
          <strong>Qualifications:</strong> {tutor.qualification}
        </p>
        <p className="tutor__info-item tutor__info-item--exp">
          <strong>Experience:</strong> {tutor.experience}
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
