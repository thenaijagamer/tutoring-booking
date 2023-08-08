import React from "react";

const TutoringServices = () => {
  return (
    <div className="tutors-search">
      <div className="tutors-search__container">
        <h2 className="tutors-search__header">Tutor Search/Browse</h2>
        <form className="tutors-search__form">
          <label htmlFor="subject" className="tutors-search__label">
            Subject:
          </label>
          <input
            className="tutors-search__input"
            type="text"
            id="subject"
            name="subject"
          />

          <label htmlFor="availability" className="tutors-search__label">
            Availability:
          </label>
          <input
            className="tutors-search__input"
            type="text"
            id="availability"
            name="availability"
          />

          <input type="submit" value="Search" />
        </form>

        <div className="tutor-list">
          <h3 className="tutor-list__header">Available Tutors</h3>
          <ul>
            <li>
              <div className="tutor-info">
                <h4>John Doe</h4>
                <p>Subject: English</p>
                <p>Qualifications: B.A. in English Literature</p>
                <p>Experience: 3 years</p>
              </div>
              <div className="tutor-actions">
                <a href="#">View Profile</a>
                <a href="/session-booking">Book Session</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TutoringServices;
