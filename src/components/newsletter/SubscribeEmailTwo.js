import PropTypes from "prop-types";
import clsx from "clsx";
import { useState } from "react";
import axios from "axios"; // Import axios
import { BASE_URL } from "../../config/config";

const SubscribeEmailTwo = ({
  onValidated,
  spaceTopClass,
  subscribeBtnClass,
}) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState(null);

  const submit = async () => {
    setStatus("sending");
    setMessage(null);

    try {
      const response = await axios.post(`${BASE_URL}data/uploadLetter`, {
        email: email,
      });

      if (response.status === 200) {
        setStatus("success");
        setMessage("Thank you for subscribing!");
      } else {
        setStatus("error");
        setMessage("Subscription failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
      setMessage("Subscription failed. Please try again later.");
    }
  };

  return (
    <div className={clsx("subscribe-form-3", spaceTopClass)}>
      <div className="mc-form">
        <div>
          <input
            className="email"
            type="email"
            placeholder="Your Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {status === "sending" && (
          <div style={{ color: "#3498db", fontSize: "12px" }}>
            Subscribing...
          </div>
        )}
        {status === "error" && (
          <div
            style={{ color: "#e74c3c", fontSize: "12px" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "#2ecc71", fontSize: "12px" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <div
          className={`clear-3 ${subscribeBtnClass ? subscribeBtnClass : ""}`}
        >
          <button className="button" onClick={submit}>
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

SubscribeEmailTwo.propTypes = {
  onValidated: PropTypes.func,
  spaceTopClass: PropTypes.string,
  subscribeBtnClass: PropTypes.string,
};

export default SubscribeEmailTwo;
