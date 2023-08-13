import React from "react";
import { useState } from "react";

import tutorsData from "../../utility/tutors.json";

import Tutor from "../../components/tutor/tutor.component";

const TutoringServices = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => setSearchValue(e.target.value);

  const filteredTutorsData = tutorsData.filter((data) =>
    data.subject.toLowerCase().includes(searchValue.toLowerCase().trim())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="tutors-search">
      <div className="tutors-search__container">
        <h2 className="tutors-search__header">Tutor Search/Browse</h2>
        <form className="tutors-search__form" onSubmit={handleSubmit}>
          <label htmlFor="subject" className="tutors-search__label">
            Subject:
          </label>
          <input
            className="tutors-search__input"
            type="search"
            id="subject"
            name="subject"
            value={searchValue}
            onChange={handleChange}
          />

          {/* <label htmlFor="availability" className="tutors-search__label">
            Availability:
          </label>
          <input
            className="tutors-search__input"
            type="search"
            id="availability"
            name="availability"
          /> */}

          {/* <input type="submit" value="Search" /> */}
        </form>

        <div className="tutor-list">
          <h3 className="tutor-list__header">Available Tutors</h3>
          <ul className="tutor-list__container">
            {filteredTutorsData.map((tutor) => (
              <Tutor tutor={tutor} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TutoringServices;
