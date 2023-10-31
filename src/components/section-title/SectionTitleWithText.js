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
            Our ethics of working with modernized method and systems has helped
            us to achieve the highest quality standard. The most notable
            manufacturing technology used by us gives increased robustness and
            products excellence. Our products water pump replacement parts are
            manufactured by using the up-to-the-minute technology and machine
            that offers them high-quality products. Regarding export, we believe
            that it is the biggest business driver for our organization. This is
            clearly evident, as, in few years of entering the export market; we
            have successfully accomplished a noteworthy number of export orders
            for, and are developing water pump assemblies for the USA and
            various other countries. We had taken major steps to fortify
            research both at the technical level as well as customer level. Our
            marketing approach is anchored in the quality and customer
            contentment we cater. The company is persistently adapting itself to
            the changing demands of its customers in terms of new designs,
            together with the wide-ranging product catalog of automotive water
            pump assemblies. The aspiration to give our customer the most
            excellent is revealed in our meticulously planned forward and
            backward integration. Our efforts are always fixated at the future
            growth. Automotive Waterpump Assemblies Parts The automobile water
            pumps assembly that we proffer is manufactured by using
            better-quality of raw material to make sure that they provide
            durable performance. These are available in a variety of dimensions
            and merchandise at reasonable prices.{" "}
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
