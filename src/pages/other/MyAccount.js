import { Fragment, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { BASE_URL } from "../../config/config";
import { toast } from "react-toastify";

const MyAccount = () => {
  let { pathname } = useLocation();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    oldPassword: "",
    newPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    // Check if any of the fields are empty
    if (
      !credentials.username ||
      !credentials.oldPassword ||
      !credentials.newPassword
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await axios.put(
        `${BASE_URL}user/agentchangePassword/${credentials.username}`,
        {
          newPassword: credentials.newPassword,
          lastPassword: credentials.oldPassword,
        }
      );

      toast.success("Password changed successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Failed to change password:", error);
      toast.error("Failed to change password.");
    }
  };

  return (
    <Fragment>
      <SEO titleTemplate="My Account" description="" />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            {
              label: "Forgot Password",
              path: process.env.PUBLIC_URL + pathname,
            },
          ]}
        />

        <div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
              <div className="ms-auto me-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <div className="single-my-account mb-20">
                    <div className="myaccount-info-wrapper">
                      <div className="account-info-wrapper">
                        <h4>
                          Change Your <strong>Password</strong>
                        </h4>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="billing-info">
                            <label>User Name</label>
                            <input
                              type="text"
                              name="username"
                              value={credentials.username}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 col-md-12">
                            <div className="billing-info">
                              <label>Old Password</label>
                              <input
                                type="password"
                                name="oldPassword"
                                value={credentials.oldPassword}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <div className="billing-info">
                              <label>New Password</label>
                              <input
                                type="password"
                                name="newPassword"
                                value={credentials.newPassword}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="billing-back-btn">
                          <div className="billing-btn">
                            <button
                              type="submit"
                              onClick={handleChangePassword}
                            >
                              Change Password
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default MyAccount;
