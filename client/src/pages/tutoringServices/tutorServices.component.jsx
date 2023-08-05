import React from "react";
import TutoringServicesStyles from "./TutoringServicesStyles";

const TutoringServices = () => {
  return (
    <main>
      <div className="container">
        <h2>Tutor Search/Browse</h2>
        <form>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" />

          <label htmlFor="availability">Availability:</label>
          <input type="text" id="availability" name="availability" />

          <input type="submit" value="Search" />
        </form>

        <div className="tutor-list">
          <h3>Available Tutors</h3>
          <ul>
            <li>
              <div className="tutor-info">
                <h4>Jane Smith</h4>
                <p>Subject: Mathematics</p>
                <p>Qualifications: M.Sc. in Mathematics</p>
                <p>Experience: 5 years</p>
              </div>
              <div className="tutor-actions">
                <a href="#">View Profile</a>
                <a href="#">Book Session</a>
              </div>
            </li>
            <li>
              <div className="tutor-info">
                <h4>John Doe</h4>
                <p>Subject: English</p>
                <p>Qualifications: B.A. in English Literature</p>
                <p>Experience: 3 years</p>
              </div>
              <div className="tutor-actions">
                <a href="#">View Profile</a>
                <a href="#">Book Session</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <TutoringServicesStyles />
    </main>
  );
};

export default TutoringServices;
