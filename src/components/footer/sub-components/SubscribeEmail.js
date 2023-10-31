import PropTypes from "prop-types";
import clsx from "clsx";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../config/config";

const SubscribeEmail = () => {
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
    <div className="subscribe-form">
      <div className="mc-form">
        <div>
          <input
            id="mc-form-email"
            className="email"
            required
            value={email}
            type="email"
            placeholder="Enter your email address..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="clear">
          <button className="button" onClick={submit}>
            SUBSCRIBE
          </button>
        </div>
      </div>

      {status === "sending" && (
        <div style={{ color: "#3498db", fontSize: "12px" }}>sending...</div>
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
    </div>
  );
};

SubscribeEmail.propTypes = {
  mailchimpUrl: PropTypes.string,
};

export default SubscribeEmail;
