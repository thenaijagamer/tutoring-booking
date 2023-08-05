import { Link } from "react-router-dom";

import Button from "../button/button.component";

const Welcome = () => {
  return (
    <section className="welcome">
      <h1 className="welcome__head">Welcome to the AcadeBooker Institution</h1>
      <p className="welcome__info">
        Introducing a convenient way to book tutoring sessions at our
        educational institution. Explore our talented tutors and find the
        perfect match for your learning needs.
      </p>
      <Button>
        <Link className="welcome__link" to={"/register"}>
          Get started
        </Link>
      </Button>
    </section>
  );
};

export default Welcome;
