import React from "react";

import Tutor from "../../components/tutor/tutor.component";

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
            type="search"
            id="subject"
            name="subject"
          />

          <label htmlFor="availability" className="tutors-search__label">
            Availability:
          </label>
          <input
            className="tutors-search__input"
            type="search"
            id="availability"
            name="availability"
          />

          <input type="submit" value="Search" />
        </form>

        <div className="tutor-list">
          <h3 className="tutor-list__header">Available Tutors</h3>
          <ul className="tutor-list__container">
            <Tutor />
            <Tutor />
            <Tutor />
            <Tutor />
            <Tutor />
            <Tutor />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TutoringServices;
