import React from "react";
import TutorProfileStyles from "./TutorProfileStyles";

const TutorProfile = () => {
  return (
    <main>
      <div className="container">
        <h2>Tutor Profile</h2>
        <div className="profile-info">
          <h3>Jane Smith</h3>
          <p>
            <strong>Subject:</strong> Mathematics
          </p>
          <p>
            <strong>Qualifications:</strong> M.Sc. in Mathematics
          </p>
          <p>
            <strong>Experience:</strong> 5 years
          </p>
        </div>
      </div>
      <TutorProfileStyles />
    </main>
  );
};

export default TutorProfile;
