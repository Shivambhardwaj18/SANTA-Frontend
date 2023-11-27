import PropTypes from "prop-types";
import clsx from "clsx";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Santa International</h1>
          <p>
            We Santa International are a popular organization from 2003 in the
            industry affianced in manufacturing, exporting and supplying a wide
            variety of Steel Metal and Rubber Products. Our offered
            product-array consists of Steel Metal Components, Agricultural
            Implements, and Rubber Parts. Offered products are optimum in terms
            of quality. These products are highly demanded by the clients in
            various industries like agriculture, electric and many more.
            Provided products are manufactured by using supreme grade components
            at our end. We are offering these products in various specifications
            to choose from. We have established a well-equipped infrastructure
            facility. Our infrastructure facility is equipped with all the
            required machines and tools for the manufacturing of the offered
            products. For interrupt free process of our business, we have
            divided our facility into various parts. To manage these
            differentiated parts, we have chosen a team of trained
            professionals. Together with this, for the ease of our customers, we
            provide these products in standard and customize options. Backed by
            a well-established distribution network, we have been capable of
            delivering these products safely at the client end. Under the firm
            direction of our mentor <strong>Mr. Ajay Gupta</strong>, we are
            operating our business function in a progressive and productive
            manner. His able managerial skills, honest business approach and
            sound knowledge about the respected domain have enabled us
            accomplishing our motives and earning the good reputation in this
            competitive industry.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default SectionTitleWithText;
